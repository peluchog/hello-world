// Importar funciones de los SDKs de Firebase (v13.0.0)
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCHCCJHkwqvi2uZJcH-1Y2sYQS0VYH-gVo",
  authDomain: "hello-world-91a46.firebaseapp.com",
  projectId: "hello-world-91a46",
  storageBucket: "hello-world-91a46.firebasestorage.app",
  messagingSenderId: "986428553316",
  appId: "1:986428553316:web:05ad968a4f88bfee658771",
  measurementId: "G-L1ZYR0QYVL"
};

// Inicializar Firebase, Analytics y Firestore
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Referencias del DOM
const contactForm = document.getElementById("formulario-contacto");
const submitBtn = document.getElementById("btn-enviar");
const formAlert = document.getElementById("form-alerta");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const mensajeInput = document.getElementById("mensaje");

    const nombre = nombreInput.value.trim();
    const correo = correoInput.value.trim();
    const mensaje = mensajeInput.value.trim();

    if (!nombre || !correo || !mensaje) {
      mostrarAlerta(texto("form.missing"), "error");
      return;
    }

    setLoading(true);

    try {
      // Guardar en la colección 'mensajes' con los campos exactos solicitados
      await addDoc(collection(db, "mensajes"), {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje,
        fecha: serverTimestamp()
      });

      mostrarAlerta(texto("form.success"), "exito");
      contactForm.reset();
    } catch (error) {
      console.error("Error al guardar mensaje en Firestore:", error);
      mostrarAlerta(texto("form.error"), "error");
    } finally {
      setLoading(false);
    }
  });
}

function setLoading(isLoading) {
  if (!submitBtn) return;
  const btnTexto = submitBtn.querySelector(".btn-texto");
  const btnSpinner = submitBtn.querySelector(".btn-spinner");

  if (isLoading) {
    submitBtn.disabled = true;
    if (btnTexto) btnTexto.style.display = "none";
    if (btnSpinner) btnSpinner.style.display = "inline-flex";
  } else {
    submitBtn.disabled = false;
    if (btnTexto) btnTexto.style.display = "inline-flex";
    if (btnSpinner) btnSpinner.style.display = "none";
  }
}

function mostrarAlerta(mensaje, tipo) {
  if (!formAlert) return;
  formAlert.textContent = mensaje;
  formAlert.className = `form-alerta alerta-${tipo}`;
  formAlert.style.display = "block";

  if (tipo === "exito") {
    setTimeout(() => {
      formAlert.style.display = "none";
    }, 6000);
  }
}

// Texto traducido según el idioma activo (definido en i18n.js)
function texto(clave) {
  return window.i18n ? window.i18n.t(clave) : clave;
}
