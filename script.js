/* =========================================================
   CONFIG — todos los datos del negocio en un único sitio.
   Los campos marcados "confirmar" son los que Jon aún no
   ha validado del todo. Cambia `enabled` a false para
   ocultarlos hasta tenerlos confirmados por escrito.
   ========================================================= */
const CONFIG = {
  name: "Carnicería Asensio",
  phoneDisplay: "695 78 38 39",
  whatsapp: "34695783839", // sin +, sin espacios
  address: {
    line1: "Arrandegi Kalea, 4",
    line2: "20003 Donostia / San Sebastián",
    // Formato "search" universal de Google Maps: lleva la dirección en texto
    // (query) MÁS el place_id como respaldo (query_place_id). El formato
    // anterior (/maps/place/?q=place_id:...) solo funcionaba bien en el
    // navegador de escritorio; en móvil, al abrir la app de Google Maps con
    // solo el place_id, la app a veces no lo reconocía y daba "no se han
    // encontrado resultados". Con este formato funciona igual en ordenador,
    // iPhone y Android.
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Carnicer%C3%ADa+Asensio%2C+Arrandegi+Kalea+4%2C+20003+Donostia&query_place_id=ChIJfQW8xU2lUQ0RCTjMSNG3ar8"
  },

  // Hora de cierre CONFIRMADA por Jon el 31/08: 19:30
  hours: {
    weekday: "8:00–14:00 / 17:00–19:30",
    saturday: "8:00–14:00"
  },

  // ⚠️ Envíos a domicilio: activar solo si Jon lo confirma
  delivery: { enabled: false },

  // Premio — sí confirmado (placa real en el mostrador)
  award: {
    enabled: true,
    text: {
      es: "2.º Premio · V Campeonato de Hamburguesa Artesana de Gipuzkoa · 2026",
      eu: "2. Saria · V. Gipuzkoako Hanburgesa Artisau Lehiaketa · 2026"
    }
  },

  // ⚠️ Valoración/número de reseñas: confirmar cifra exacta el día de publicar
  rating: { enabled: true, score: "5.0", count: "25" },

  // Reseñas de ejemplo — sustituir por 2 reseñas reales elegidas por Jon
  reviews: [
    { es: "La mejor carne y los mejores callos del País Vasco. Todo estuvo fantástico.", eu: "Euskal Herriko haragirik eta tripakirik onenak. Dena bikaina izan zen." },
    { es: "Producto excelente y trato cercano; los callos, deliciosos.", eu: "Produktu bikaina eta tratu hurbila; tripakiak, ezin hobeak." }
  ],
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJfQW8xU2lUQ0RCTjMSNG3ar8",

  // Rutas de imágenes — sustituir por las fotos reales (ver lista al final)
  hero: "img/hero-asensio.webp",
  gallery: [
    { src: "img/fachada.webp", alt: { es: "Fachada de Carnicería Asensio en Arrandegi Kalea", eu: "Asensio Harategiaren fatxada, Arrandegi Kalean" } },
    { src: "img/txistorra.webp", alt: { es: "Txistorra artesana", eu: "Txistorra artisaua" } },
    { src: "img/mostrador.webp", alt: { es: "Producto en el mostrador de la carnicería", eu: "Harategiko mostradoreko produktua" } },
    { src: "img/corte-artesano.webp", alt: { es: "Piezas de carne seleccionadas en el expositor", eu: "Hautatutako haragi-piezak erakusleihoan" } },
    { src: "img/hamburguesa-premio.webp", alt: { es: "Distintivo del premio a la hamburguesa artesana", eu: "Hanburgesa artisau sariaren bereizgarria" } }
  ],

  // Bares/restaurantes que compran a Jon — CONFIRMADO por Jon, le gusta la idea (25/08)
  // ⚠️ "Zuazi" pendiente de confirmar ortografía exacta con él, revisar antes de publicar versión final
  suppliers: {
    enabled: true,
    list: ["Casa Urola", "Bar Néstor", "La Rampa", "Itxaropena", "Muxumartin", "Zuhazi", "Aitona 1966"]
  },

  // Productos confirmados por Jon (sin huevos)
  products: [
    {
      key: "txuleta",
      es: { title: "Txuleta", body: "Nuestro producto estrella: pieza seleccionada y madurada con el cuidado de siempre." },
      eu: { title: "Txuleta", body: "Gure produktu nagusia: pieza hautatua eta ondua, betiko arretaz." }
    },
    {
      key: "callos",
      es: { title: "Callos caseros", body: "Elaboración propia, receta tradicional de la casa." },
      eu: { title: "Tripakiak", body: "Geuk eginak, betiko errezetarekin." }
    },
    {
      key: "txistorra",
      es: { title: "Txistorra", body: "Txistorra artesana, elaborada en la propia carnicería." },
      eu: { title: "Txistorra", body: "Txistorra artisaua, geuk eginda." }
    },
    {
      key: "hamburguesa",
      es: { title: "Hamburguesa artesana", body: "2.º Premio · V Campeonato de Hamburguesa Artesana de Gipuzkoa 2026." },
      eu: { title: "Hanburgesa artisaua", body: "2. Saria · V. Gipuzkoako Hanburgesa Artisau Lehiaketa 2026." }
    }
  ]
};

/* =========================================================
   TEXTOS ES / EU
   ========================================================= */
const I18N = {
  es: {
    "nav.products": "Productos", "nav.about": "Nosotros", "nav.orders": "Pedidos",
    "nav.reviews": "Reseñas", "nav.visit": "Visítanos",
    "brand.eyebrow": "Harategia",
    "header.whatsapp": "WhatsApp",
    "hero.eyebrow": "En Donostia, desde siempre",
    "hero.title": "Calidad tradicional,<br>sabor incomparable.",
    "hero.sub": "Carne seleccionada con cuidado y el trato cercano de la carnicería de siempre.",
    "hero.cta.order": "Pedir por WhatsApp", "hero.cta.map": "Cómo llegar",
    "specialties.eyebrow": "Lo que trabajamos",
    "specialties.title": "Producto seleccionado, pieza a pieza.",
    "about.eyebrow": "Nuestro local",
    "about.title": "Tradición y cercanía en la Parte Vieja.",
    "about.body": "Somos una carnicería de barrio en el corazón de Donostia. Te ayudamos a elegir el corte y la cantidad para cada ocasión.",
    "suppliers.eyebrow": "Confían en nosotros",
    "suppliers.title": "Proveedores de bares y restaurantes de la Parte Vieja.",
    "order.eyebrow": "Pedidos",
    "order.title": "Haz tu encargo, te respondemos enseguida.",
    "order.sub": "Rellena qué necesitas y preparamos el mensaje ya escrito — solo tienes que enviarlo por WhatsApp.",
    "form.name": "Nombre y apellido", "form.phone": "Teléfono", "form.product": "¿Qué necesitas?",
    "form.qty": "Cantidad o peso", "form.cut": "Tipo de corte", "form.cut.none": "Sin preferencia",
    "form.cut.slices": "En filetes", "form.cut.cubes": "En tacos", "form.cut.whole": "Entero",
    "form.cut.minced": "Picado", "form.cut.other": "Otro (indícalo en observaciones)",
    "form.date": "¿Para cuándo?", "form.time": "¿A qué hora?",
    "form.delivery": "Recogida o envío", "form.delivery.pickup": "Recogida en tienda", "form.delivery.ship": "Envío a domicilio",
    "form.address": "Dirección de envío", "form.notes": "Observaciones (opcional)",
    "form.privacy": 'He leído y acepto la <a href="privacidad.html" target="_blank">política de privacidad</a>.',
    "form.submit": "Enviar pedido por WhatsApp",
    "form.confirmNote": "El pedido queda confirmado únicamente cuando Carnicería Asensio responda por WhatsApp.",
    "form.error.required": "Este campo es obligatorio.",
    "form.error.phone": "Introduce un teléfono válido.",
    "reviews.eyebrow": "Lo que dicen de nosotros", "reviews.title": "¿Te ha gustado nuestro servicio?",
    "reviews.sub": "Tu opinión nos ayuda a seguir creciendo.", "reviews.cta": "Dejar una reseña en Google",
    "visit.eyebrow": "Visítanos", "visit.mapCta": "Ver ubicación en el mapa",
    "visit.cta.order": "Pedir por WhatsApp", "visit.cta.call": "Llamar",
    "footer.legal": "Aviso legal", "footer.privacy": "Privacidad", "footer.cookies": "Cookies",
    "hours.weekdayLabel": "Lunes a viernes", "hours.saturdayLabel": "Sábados",
    "award.badge": CONFIG.award.text.es
  },
  eu: {
    "nav.products": "Produktuak", "nav.about": "Gutaz", "nav.orders": "Eskaerak",
    "nav.reviews": "Iritziak", "nav.visit": "Bisitatu",
    "brand.eyebrow": "Harategia",
    "header.whatsapp": "WhatsApp",
    "hero.eyebrow": "Donostian, betidanik",
    "hero.title": "Betiko kalitatea,<br>gustu paregabea.",
    "hero.sub": "Ardura handiz hautatutako haragia eta betiko auzoko harategiaren tratu hurbila.",
    "hero.cta.order": "Eskatu WhatsApp bidez", "hero.cta.map": "Nola iritsi",
    "specialties.eyebrow": "Geuk lantzen duguna",
    "specialties.title": "Pieza bakoitza banan-banan hautatzen dugu.",
    "about.eyebrow": "Gure denda",
    "about.title": "Tradizioa eta hurbiltasuna Alde Zaharrean.",
    "about.body": "Auzoko harategia gara, Donostiaren bihotzean. Une bakoitzerako ebaki eta kantitate egokiena aukeratzen laguntzen dizugu.",
    "suppliers.eyebrow": "Gutaz fio dira",
    "suppliers.title": "Alde Zaharreko taberna eta jatetxeen hornitzailea.",
    "order.eyebrow": "Eskaerak",
    "order.title": "Egin zure eskaera, berehala erantzungo dizugu.",
    "order.sub": "Idatzi zer behar duzun, eta WhatsAppeko mezua prest utziko dizugu — bidali besterik ez duzu egin beharko.",
    "form.name": "Izena eta abizena", "form.phone": "Telefonoa", "form.product": "Zer behar duzu?",
    "form.qty": "Kopurua edo pisua", "form.cut": "Ebaketa mota", "form.cut.none": "Lehentasunik gabe",
    "form.cut.slices": "Xerretan", "form.cut.cubes": "Taco eran", "form.cut.whole": "Osorik",
    "form.cut.minced": "Xehatuta", "form.cut.other": "Beste bat (oharretan)",
    "form.date": "Noiz?", "form.time": "Zer ordutan?",
    "form.delivery": "Dendan jaso ala etxera bidali?", "form.delivery.pickup": "Dendan jaso", "form.delivery.ship": "Etxera bidali",
    "form.address": "Bidalketa helbidea", "form.notes": "Oharrak (aukerakoa)",
    "form.privacy": 'Irakurri eta onartzen dut <a href="privacidad.html" target="_blank">pribatutasun politika</a>.',
    "form.submit": "Eskaera bidali WhatsApp bidez",
    "form.confirmNote": "Eskaera ez da baieztatutzat joko Asensio Harategiaren erantzuna jaso arte.",
    "form.error.required": "Eremu hau beharrezkoa da.",
    "form.error.phone": "Sartu baliozko telefono bat.",
    "reviews.eyebrow": "Gutaz diotena", "reviews.title": "Gure zerbitzua gustatu zaizu?",
    "reviews.sub": "Zure iritziak hobetzen jarraitzen laguntzen digu.", "reviews.cta": "Utzi iritzia Googlen",
    "visit.eyebrow": "Bisitatu", "visit.mapCta": "Ikusi kokapena mapan",
    "visit.cta.order": "Eskatu WhatsApp bidez", "visit.cta.call": "Deitu",
    "footer.legal": "Lege oharra", "footer.privacy": "Pribatutasuna", "footer.cookies": "Cookieak",
    "hours.weekdayLabel": "Astelehenetik ostiralera", "hours.saturdayLabel": "Larunbatetan",
    "award.badge": CONFIG.award.text.eu
  }
};

let currentLang = localStorage.getItem("asensio-lang") || "es";

/* =========================================================
   MENSAJE DE WHATSAPP — construido con array + join para
   evitar el bug de caracteres corruptos (el símbolo "�").
   Se usa un guion simple "-" en vez de emoji para máxima
   compatibilidad, y encodeURIComponent al final.
   ========================================================= */
function buildWhatsappOrderMessage(data, lang) {
  const L = lang === "eu"
    ? { greet: "Kaixo, eskaera bat egin nahi dut:", name: "Izena", phone: "Telefonoa",
        product: "Produktua", qty: "Kopurua", cut: "Ebaketa", date: "Eguna", time: "Ordua",
        delivery: "Jasotzea", pickup: "Dendan jaso", ship: "Etxera bidali", address: "Helbidea",
        notes: "Oharrak", closing: "Baiezta al dezakezue eskuragarritasuna eta ordua? Eskerrik asko." }
    : { greet: "Hola, quiero hacer un pedido:", name: "Nombre", phone: "Teléfono",
        product: "Producto", qty: "Cantidad", cut: "Corte", date: "Fecha", time: "Hora",
        delivery: "Entrega", pickup: "Recogida en tienda", ship: "Envío a domicilio", address: "Dirección",
        notes: "Observaciones", closing: "¿Podéis confirmar disponibilidad y hora? Gracias." };

  const lines = [];
  lines.push(L.greet, "");
  lines.push(`- ${L.name}: ${data.name}`);
  lines.push(`- ${L.phone}: ${data.phone}`);
  lines.push(`- ${L.product}: ${data.product}`);
  if (data.qty) lines.push(`- ${L.qty}: ${data.qty}`);
  if (data.cut) lines.push(`- ${L.cut}: ${data.cut}`);
  lines.push(`- ${L.date}: ${data.date}`);
  lines.push(`- ${L.time}: ${data.time}`);
  if (CONFIG.delivery.enabled) {
    lines.push(`- ${L.delivery}: ${data.delivery === "envio" ? L.ship : L.pickup}`);
    if (data.delivery === "envio" && data.address) lines.push(`- ${L.address}: ${data.address}`);
  }
  if (data.notes) lines.push(`- ${L.notes}: ${data.notes}`);
  lines.push("", L.closing);

  return lines.join("\n");
}

function buildWhatsappUrl(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

/* =========================================================
   RENDER — vuelca CONFIG en el DOM según el idioma activo
   ========================================================= */
function applyTranslations(lang) {
  document.documentElement.lang = lang;
  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active);
  });

  // SEO
  const titles = {
    es: "Carnicería Asensio — Donostia / San Sebastián",
    eu: "Asensio Harategia — Donostia"
  };
  const descs = {
    es: "Carnicería tradicional en la Parte Vieja de Donostia. Txuleta, callos caseros, txistorra y hamburguesa artesana premiada. Pedidos por WhatsApp.",
    eu: "Harategia tradizionala Donostiako Alde Zaharrean. Txuleta, etxeko tripakiak, txistorra eta hanburgesa artisau saritua. Eskaerak WhatsApp bidez."
  };
  document.getElementById("seo-title").textContent = titles[lang];
  document.getElementById("seo-desc").setAttribute("content", descs[lang]);

  renderSpecialties(lang);
  renderSuppliers(lang);
  renderGallery(lang);
  renderReviews(lang);
  renderHours(lang);
  renderJsonLd();
  syncWhatsappLinks();
}

// Iconos de línea propios, uno por tipo de producto — no genéricos de librería.
const PRODUCT_ICONS = {
  txuleta: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 26c0-9 6-16 15-16 6 0 9 4 9 8 0 5-4 7-9 7-5 0-6 3-6 6 0 4-3 6-7 6-4 0-6-2-6-6 0-2 2-4 4-5z"/><circle cx="14" cy="24" r="1.4" fill="currentColor" stroke="none"/><circle cx="20" cy="19" r="1.4" fill="currentColor" stroke="none"/></svg>',
  callos: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M7 20c0-3 2-5 5-5s4 2 6 2 3-3 6-3 5 3 5 6-3 6-6 6-3-2-5-2-4 3-7 3-4-3-4-7z"/><path d="M20 8v4M20 32v-4" stroke-linecap="round"/></svg>',
  txistorra: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 10c-3 0-4 3-2 5s6 1 6 4-4 2-6 4 0 6 3 6 5-2 5-5 4-2 6-4-1-6-4-7-5 0-8-3z"/></svg>',
  hamburguesa: '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 17c0-5 5-9 12-9s12 4 12 9" stroke-linecap="round"/><path d="M7 20h26" stroke-linecap="round"/><path d="M8 24h24" stroke-linecap="round"/><path d="M9 28c1 3 3 4 11 4s10-1 11-4" stroke-linecap="round"/></svg>'
};

function renderSpecialties(lang) {
  const wrap = document.getElementById("specialtyCards");
  wrap.innerHTML = CONFIG.products.map(p => `
    <article class="card">
      <span class="card-icon">${PRODUCT_ICONS[p.key] || ""}</span>
      <h3>${p[lang].title}</h3>
      <p>${p[lang].body}</p>
    </article>
  `).join("");
}

function renderSuppliers(lang) {
  const section = document.getElementById("suppliersSection");
  if (!CONFIG.suppliers.enabled) { section.hidden = true; return; }
  section.hidden = false;
  document.getElementById("suppliersTitle").textContent = I18N[lang]["suppliers.title"];
  document.getElementById("suppliersList").innerHTML = CONFIG.suppliers.list
    .map(name => `<li><span>${name}</span></li>`).join("");
}

function renderGallery(lang) {
  const wrap = document.getElementById("galleryGrid");
  wrap.innerHTML = CONFIG.gallery.map(g => `
    <div class="gallery-item">
      <img src="${g.src}" alt="${g.alt[lang]}" loading="lazy" width="400" height="300"
           onerror="this.closest('.gallery-item').classList.add('gallery-item--broken')">
    </div>
  `).join("");
}

function renderReviews(lang) {
  const wrap = document.getElementById("reviewsList");
  if (!CONFIG.rating.enabled) { wrap.innerHTML = ""; return; }
  const citeText = lang === "eu"
    ? `${CONFIG.rating.score} · Googlen ${CONFIG.rating.count} iritzi artean`
    : `${CONFIG.rating.score} de nota media, entre ${CONFIG.rating.count} reseñas en Google`;
  wrap.innerHTML = CONFIG.reviews.map(r => `
    <blockquote class="review-card">
      <span class="review-mark" aria-hidden="true">&rdquo;</span>
      <p>${r[lang]}</p>
      <cite>${citeText}</cite>
    </blockquote>
  `).join("");
}

function renderHours(lang) {
  const dict = I18N[lang];
  const wrap = document.getElementById("visitHours");
  wrap.innerHTML = `
    <dt>${dict["hours.weekdayLabel"]}</dt><dd>${CONFIG.hours.weekday}</dd>
    <dt>${dict["hours.saturdayLabel"]}</dt><dd>${CONFIG.hours.saturday}</dd>
  `;
}

function renderJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Butcher",
    "name": CONFIG.name,
    "telephone": "+" + CONFIG.whatsapp,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONFIG.address.line1,
      "addressLocality": "Donostia / San Sebastián",
      "postalCode": "20003",
      "addressCountry": "ES"
    }
  };
  document.getElementById("ld-json").textContent = JSON.stringify(data);
}

function syncWhatsappLinks() {
  const baseMsg = currentLang === "eu" ? "Kaixo! Eskaera bat egin nahi dut." : "¡Hola! Quiero hacer un pedido.";
  const url = buildWhatsappUrl(baseMsg);
  ["headerWhatsapp", "heroWhatsapp", "visitWhatsapp", "floatingWhatsapp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
  document.getElementById("heroMap").href = CONFIG.address.mapsUrl;
  document.getElementById("visitMapLink").href = CONFIG.address.mapsUrl;
  document.getElementById("googleReviewLink").href = CONFIG.googleReviewUrl;
  document.getElementById("qrReviewLink").href = CONFIG.googleReviewUrl;
  document.getElementById("visitPhone").textContent = CONFIG.phoneDisplay;
  document.getElementById("visitAddress").textContent = CONFIG.address.line1;
  document.getElementById("visitAddress2").textContent = CONFIG.address.line2;
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Premio: mostrar solo si está confirmado
  if (CONFIG.award.enabled) document.getElementById("awardBadge").hidden = false;

  // Envíos: mostrar campos solo si está activado
  if (CONFIG.delivery.enabled) {
    document.getElementById("deliveryField").hidden = false;
  }
  document.getElementById("f-delivery")?.addEventListener("change", e => {
    document.getElementById("addressField").hidden = e.target.value !== "envio";
  });

  applyTranslations(currentLang);

  // Selector de idioma
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem("asensio-lang", currentLang);
      applyTranslations(currentLang);
    });
  });

  // Menú móvil
  // ---------------------------------------------------------------
  // Corrección del bug en móvil: el menú (Productos, Nosotros, Pedidos,
  // Reseñas, Visítanos...) es un panel de posición fija que antes solo
  // se cerraba si se tocaba un enlace. Si el usuario lo abría sin querer
  // y luego bajaba con el dedo, el panel se quedaba fijo tapando el
  // contenido, porque nada lo cerraba al hacer scroll ni bloqueaba el
  // scroll de la página de detrás. Se corrige así:
  //  1) Se calcula la altura REAL del header (variaba según el móvil)
  //     y se guarda en --header-h para que el menú encaje justo debajo.
  //  2) Se bloquea el scroll de la página mientras el menú está abierto.
  //  3) Se cierra el menú automáticamente si el usuario hace scroll,
  //     toca el fondo oscuro, pulsa Escape, o gira/agranda la pantalla.
  // ---------------------------------------------------------------
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const navBackdrop = document.getElementById("navBackdrop");
  const siteHeader = document.querySelector(".site-header");

  function setHeaderHeightVar() {
    if (siteHeader) {
      document.documentElement.style.setProperty("--header-h", siteHeader.offsetHeight + "px");
    }
  }
  setHeaderHeightVar();
  window.addEventListener("resize", setHeaderHeightVar);

  function closeMobileMenu() {
    mainNav.classList.remove("is-open");
    navBackdrop.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", false);
    document.documentElement.classList.remove("nav-open");
  }

  function openMobileMenu() {
    setHeaderHeightVar();
    mainNav.classList.add("is-open");
    navBackdrop.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", true);
    document.documentElement.classList.add("nav-open");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.contains("is-open");
    if (isOpen) closeMobileMenu(); else openMobileMenu();
  });

  mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMobileMenu));
  navBackdrop.addEventListener("click", closeMobileMenu);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMobileMenu();
  });

  // Si el usuario hace scroll con el menú abierto (p.ej. arrastre accidental
  // en iOS antes de que el bloqueo de scroll surta efecto), se cierra solo.
  window.addEventListener("scroll", () => {
    if (mainNav.classList.contains("is-open")) closeMobileMenu();
  }, { passive: true });

  // Si la pantalla pasa a tamaño de escritorio con el menú abierto, se cierra.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 860 && mainNav.classList.contains("is-open")) closeMobileMenu();
  });

  // Formulario
  const form = document.getElementById("orderForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll(".field-error").forEach(el => el.textContent = "");

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const product = form.product.value.trim();
    const date = form.date.value;
    const time = form.time.value;
    const privacy = form.privacy.checked;

    const setError = (fieldId, msg) => {
      const el = form.querySelector(`[data-error-for="${fieldId}"]`);
      if (el) el.textContent = msg;
      valid = false;
    };

    const dict = I18N[currentLang];
    if (!name) setError("f-name", dict["form.error.required"]);
    const phoneClean = phone.replace(/[\s()-]/g, "");
    if (!/^(\+?34)?[6-9]\d{8}$/.test(phoneClean)) setError("f-phone", dict["form.error.phone"]);
    if (!product) setError("f-product", dict["form.error.required"]);
    if (!date) setError("f-date", dict["form.error.required"]);
    if (!time) setError("f-time", dict["form.error.required"]);
    if (!privacy) setError("f-privacy", dict["form.error.required"]);

    if (!valid) return;

    const cutSelect = form.cut;
    const cutLabel = cutSelect.value ? cutSelect.options[cutSelect.selectedIndex].text : "";

    const message = buildWhatsappOrderMessage({
      name, phone, product,
      qty: form.qty.value.trim(),
      cut: cutLabel,
      date, time,
      delivery: form.delivery ? form.delivery.value : "recogida",
      address: form.address ? form.address.value.trim() : "",
      notes: form.notes.value.trim()
    }, currentLang);

    window.open(buildWhatsappUrl(message), "_blank", "noopener");
  });
});
