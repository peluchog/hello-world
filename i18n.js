// ==========================================================================
// Traducción Español / Inglés
// Cada elemento con data-i18n="clave" toma su texto de este diccionario.
// También: data-i18n-placeholder, data-i18n-alt y data-i18n-aria.
// ==========================================================================
(function () {
  const TEXTOS = {
    es: {
      "meta.title": "Jose Luciano Gil - Portafolio Profesional",
      "lang.label": "Idioma",
      "nav.about": "Sobre mí",
      "nav.experience": "Experiencia",
      "nav.contact": "Contacto",

      "hero.photoAlt": "Foto de Jose Luciano Gil",
      "hero.title": "Hola, soy Jose Luciano Gil",
      "hero.subtitle": "Paralegal • Case Manager • Operaciones & Flujos con IA",
      "hero.bio": "Profesional bilingüe con más de 8 años de trayectoria gestionando portafolios de casos legales de alta exigencia, negociaciones complejas y operaciones logísticas. Me especializo en la gestión integral de casos de lesiones personales (intake, reducción de gravámenes médicos y acuerdos procesales), así como en la creación e integración de flujos de trabajo inteligentes con IA (Claude) y herramientas no-code.",

      "exp.title": "Experiencia Laboral",
      "exp.summary": "<strong>Especialista bilingüe en operaciones legales y optimización:</strong> Amplia experiencia en firmas estadounidenses gestionando ciclos completos de casos (Personal Injury), reducción agresiva de facturas médicas y desarrollo de sistemas internos.",

      "exp.job1.title": "Paralegal – Operaciones & Marketing",
      "exp.job1.dates": "Septiembre 2025 – Presente",
      "exp.job1.b1": "Gestión integral de casos de lesiones personales desde la admisión (intake) hasta el acuerdo final (settlement).",
      "exp.job1.b2": "Negociación y reducción de gravámenes y facturas médicas (medical liens).",
      "exp.job1.b3": "Diseño de flujos de trabajo asistidos por IA (Claude) y herramientas no-code.",

      "exp.job2.title": "Case Manager – Lesiones Personales",
      "exp.job2.dates": "Octubre 2024 – Julio 2025",
      "exp.job2.b1": "Entrevistas a clientes, evaluación de responsabilidad y revisión de informes policiales.",
      "exp.job2.b2": "Coordinación de tratamientos médicos y negociación directa con ajustadores de seguros.",
      "exp.job2.b3": "Redacción de cartas de demanda (demand letters) y preparación para mediaciones.",

      "exp.job3.title": "Especialista de Soporte & Control de Calidad (QC)",
      "exp.job3.promoted": "(Promovido a Case Manager)",
      "exp.job3.dates": "Diciembre 2023 – Octubre 2024",
      "exp.job3.b1": "Auditoría y control de calidad de expedientes legales bajo estrictos tiempos de entrega.",

      "exp.job4.title": "Coordinador de Logística y Transporte",
      "exp.job4.b1": "Negociación de fletes, gestión de documentación y pólizas de seguros, y optimización de rutas.",

      "contact.title": "Contacto",
      "contact.desc": "¿Te interesa colaborar o tienes alguna propuesta? Déjame un mensaje y te responderé lo antes posible.",
      "form.name": "Nombre",
      "form.namePh": "Tu nombre completo",
      "form.email": "Correo",
      "form.emailPh": "ejemplo@correo.com",
      "form.message": "Mensaje",
      "form.messagePh": "Escribe tu mensaje aquí...",
      "form.send": "Enviar",
      "form.sending": "Enviando...",
      "form.missing": "Por favor, completa todos los campos.",
      "form.success": "¡Mensaje enviado correctamente! Me pondré en contacto pronto.",
      "form.error": "Hubo un error al enviar el mensaje. Intenta de nuevo más tarde.",

      "footer.title": "Datos de Contacto",
      "footer.desc": "¿Te gustaría conectar o conversar sobre una oportunidad profesional? Puedes contactarme a través de:",
      "footer.location": "Bello, Antioquia, Colombia • Disponible para modalidad remota"
    },

    en: {
      "meta.title": "Jose Luciano Gil - Professional Portfolio",
      "lang.label": "Language",
      "nav.about": "About me",
      "nav.experience": "Experience",
      "nav.contact": "Contact",

      "hero.photoAlt": "Photo of Jose Luciano Gil",
      "hero.title": "Hi, I'm Jose Luciano Gil",
      "hero.subtitle": "Paralegal • Case Manager • Operations & AI Workflows",
      "hero.bio": "Bilingual professional with 8+ years of experience managing demanding legal case portfolios, complex negotiations, and logistics operations. I specialize in end-to-end personal injury case management (intake, medical lien reductions, and settlements), as well as building and integrating smart workflows with AI (Claude) and no-code tools.",

      "exp.title": "Work Experience",
      "exp.summary": "<strong>Bilingual legal operations and optimization specialist:</strong> Extensive experience at U.S. law firms managing full personal injury case lifecycles, aggressively reducing medical bills, and building internal systems.",

      "exp.job1.title": "Paralegal – Operations & Marketing",
      "exp.job1.dates": "September 2025 – Present",
      "exp.job1.b1": "End-to-end management of personal injury cases, from intake through final settlement.",
      "exp.job1.b2": "Negotiation and reduction of medical liens and medical bills.",
      "exp.job1.b3": "Design of AI-assisted workflows (Claude) and no-code tools.",

      "exp.job2.title": "Case Manager – Personal Injury",
      "exp.job2.dates": "October 2024 – July 2025",
      "exp.job2.b1": "Client interviews, liability assessment, and police report review.",
      "exp.job2.b2": "Coordination of medical treatment and direct negotiation with insurance adjusters.",
      "exp.job2.b3": "Drafting demand letters and preparing cases for mediation.",

      "exp.job3.title": "Support & Quality Control (QC) Specialist",
      "exp.job3.promoted": "(Promoted to Case Manager)",
      "exp.job3.dates": "December 2023 – October 2024",
      "exp.job3.b1": "Auditing and quality control of legal case files under tight deadlines.",

      "exp.job4.title": "Logistics and Transportation Coordinator",
      "exp.job4.b1": "Freight negotiation, documentation and insurance policy management, and route optimization.",

      "contact.title": "Contact",
      "contact.desc": "Interested in working together or have a proposal? Leave me a message and I'll get back to you as soon as possible.",
      "form.name": "Name",
      "form.namePh": "Your full name",
      "form.email": "Email",
      "form.emailPh": "example@email.com",
      "form.message": "Message",
      "form.messagePh": "Write your message here...",
      "form.send": "Send",
      "form.sending": "Sending...",
      "form.missing": "Please fill out all fields.",
      "form.success": "Message sent successfully! I'll be in touch soon.",
      "form.error": "There was an error sending your message. Please try again later.",

      "footer.title": "Contact Information",
      "footer.desc": "Would you like to connect or talk about a professional opportunity? You can reach me through:",
      "footer.location": "Bello, Antioquia, Colombia • Available for remote work"
    }
  };

  const CLAVE_GUARDADA = "idioma";
  let idiomaActual = "es";

  function leerIdiomaGuardado() {
    try {
      const guardado = localStorage.getItem(CLAVE_GUARDADA);
      if (guardado && TEXTOS[guardado]) return guardado;
    } catch (e) { /* sin localStorage: se usa español */ }
    return "es";
  }

  function t(clave) {
    return (TEXTOS[idiomaActual] && TEXTOS[idiomaActual][clave]) || TEXTOS.es[clave] || clave;
  }

  function aplicarIdioma(idioma) {
    if (!TEXTOS[idioma]) return;
    idiomaActual = idioma;
    document.documentElement.lang = idioma;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.alt = t(el.dataset.i18nAlt);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === idioma));
    });

    try { localStorage.setItem(CLAVE_GUARDADA, idioma); } catch (e) { /* ignorar */ }
  }

  // Exponer para app.js (mensajes del formulario)
  window.i18n = { t: t, aplicar: aplicarIdioma };

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => aplicarIdioma(btn.dataset.lang));
  });

  aplicarIdioma(leerIdiomaGuardado());
})();
