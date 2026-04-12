(() => {
  const localeMeta = {
    fr: { dir: "ltr" },
    en: { dir: "ltr" },
    es: { dir: "ltr" },
    zh: { dir: "ltr" },
    ar: { dir: "rtl" }
  };

  const setLangOnLinks = (locale) => {
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("http")) return;
      const url = new URL(href, window.location.href);
      if (url.pathname.endsWith(".html") || url.pathname === "/" || url.pathname.endsWith("/")) {
        url.searchParams.set("lang", locale);
        link.setAttribute("href", url.pathname + url.search + url.hash);
      }
    });
  };

  const apply = (locale) => {
    const key = pageKey();
    if (!key) return;

    localStorage.setItem("iauai_lang", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = localeMeta[locale].dir;
    document.body.classList.toggle("rtl", localeMeta[locale].dir === "rtl");

    const select = document.getElementById("langSelect");
    if (select) {
      select.value = locale;
      select.onchange = () => {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", select.value);
        window.location.href = url.pathname + url.search + url.hash;
      };
    }

    const data = (translate[key] && (translate[key][locale] || translate[key].en)) || null;
    if (data) {
      document.title = data.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", data.description);
      const backLink = document.querySelector(".back-link");
      if (backLink) backLink.textContent = data.back;
      const main = document.querySelector(".page-content");
      if (main) main.innerHTML = data.main;
      const footer = document.querySelector("footer p");
      if (footer) footer.innerHTML = data.footer;
    }

    setLangOnLinks(locale);
  };

  document.addEventListener("DOMContentLoaded", () => {
    apply(getLocale());
  });
})();

  const normalize = (value) => {
    if (!value) return "fr";
    const code = value.toLowerCase().split("-")[0];
    return localeMeta[code] ? code : "fr";
  };

  const getLocale = () => {
    const url = new URL(window.location.href);
    return normalize(url.searchParams.get("lang") || localStorage.getItem("iauai_lang") || navigator.language);
  };

  const pageKey = () => {
    const path = window.location.pathname;
    if (path.includes("mentions-legales")) return "mentions";
    if (path.includes("politique-confidentialite")) return "privacy";
    if (path.includes("cgv")) return "terms";
    return null;
  };

  const translate = {
    mentions: {
      en: {
        title: "Legal notice — IAuAI",
        description: "IAuAI legal notice.",
        back: "← Back to the site",
        footer:
          "© 2026 IAuAI — All rights reserved · <a href=\"index.html\">Home</a><a href=\"politique-confidentialite.html\">Privacy</a><a href=\"cgv.html\">Terms</a>",
        main: `
    <div class="page-header">
      <span class="page-label">Legal information</span>
      <h1>Legal notice</h1>
      <span class="updated">Last updated: April 2026</span>
    </div>

    <div class="legal-section">
      <h2>1. Website publisher</h2>
      <p>The website <strong>iauai.fr</strong> is published by IAuAI.</p>
      <div class="info-card">
        <div class="info-row"><span class="info-label">Company name</span><span class="info-val">IAuAI</span></div>
        <div class="info-row"><span class="info-label">Legal form</span><span class="info-val">SAS</span></div>
        <div class="info-row"><span class="info-label">Share capital</span><span class="info-val">€2,500</span></div>
        <div class="info-row"><span class="info-label">Registration number</span><span class="info-val"><span class="placeholder">[Registration number — pending]</span></span></div>
        <div class="info-row"><span class="info-label">Trade register</span><span class="info-val"><span class="placeholder">[Registration city — pending]</span></span></div>
        <div class="info-row"><span class="info-label">VAT number</span><span class="info-val"><span class="placeholder">[EU VAT number — pending]</span></span></div>
        <div class="info-row"><span class="info-label">Registered office</span><span class="info-val"><span class="placeholder">[Full address — to be completed]</span></span></div>
        <div class="info-row"><span class="info-label">Phone</span><span class="info-val"><span class="placeholder">[Phone number — pending]</span></span></div>
        <div class="info-row"><span class="info-label">Email</span><span class="info-val"><a href="mailto:contact@iauai.fr">contact@iauai.fr</a></span></div>
        <div class="info-row"><span class="info-label">Website</span><span class="info-val"><a href="https://iauai.fr">https://iauai.fr</a></span></div>
      </div>
    </div>

    <div class="legal-section">
      <h2>2. Publishing director</h2>
      <div class="info-card">
        <div class="info-row"><span class="info-label">Publishing director</span><span class="info-val"><span class="placeholder">[Name of legal representative — to be completed]</span></span></div>
        <div class="info-row"><span class="info-label">Contact</span><span class="info-val"><a href="mailto:contact@iauai.fr">contact@iauai.fr</a></span></div>
      </div>
    </div>

    <div class="legal-section">
      <h2>3. Hosting provider</h2>
      <p>The website iauai.fr is hosted by:</p>
      <div class="info-card">
        <div class="info-row"><span class="info-label">Hosting provider</span><span class="info-val"><span class="placeholder">[Hosting company name — e.g. OVH, Vercel, Netlify]</span></span></div>
        <div class="info-row"><span class="info-label">Registered office</span><span class="info-val"><span class="placeholder">[Hosting provider address — to be completed]</span></span></div>
        <div class="info-row"><span class="info-label">Website</span><span class="info-val"><span class="placeholder">[Hosting provider URL — to be completed]</span></span></div>
      </div>
    </div>

    <div class="legal-section">
      <h2>4. Intellectual property</h2>
      <p>All content available on iauai.fr (texts, images, logos, graphics, videos and page structures) is the exclusive property of IAuAI or is used under authorization, unless stated otherwise.</p>
      <p>Any reproduction, representation, modification, publication or adaptation of all or part of the website elements, regardless of the method used, is prohibited without prior written authorization from IAuAI.</p>
      <p>The name <strong>IAuAI</strong>, the logo and the tagline “Intelligence · Sovereignty · Territory” are distinctive assets belonging to IAuAI and may not be used without authorization.</p>
    </div>

    <div class="legal-section">
      <h2>5. Limitation of liability</h2>
      <p>IAuAI makes reasonable efforts to ensure the accuracy and updating of the information published on the website. However, IAuAI reserves the right to correct or change content at any time without notice.</p>
      <p>IAuAI cannot be held liable for direct or indirect damages resulting from access to the website or from use of the information published on it. IAuAI is also not responsible for access to third-party websites linked from this website.</p>
    </div>

    <div class="legal-section">
      <h2>6. Cookies and trackers</h2>
      <p>The website iauai.fr uses analytics cookies (Microsoft Clarity, Google Analytics 4) only after obtaining your explicit consent. These tools are used to measure traffic and improve user experience. No personal data is sold to third parties.</p>
      <p>For more details about cookie management and your rights, please read our <a href="politique-confidentialite.html">Privacy policy</a>.</p>
    </div>

    <div class="legal-section">
      <h2>7. Governing law and jurisdiction</h2>
      <p>This legal notice is governed by French law. In the event of a dispute relating to the use of the website, only French courts shall have jurisdiction.</p>
      <p>If you have any questions regarding this legal notice, you may contact IAuAI at: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a></p>
    </div>`
      },
      es: {
        title: "Aviso legal — IAuAI",
        description: "Aviso legal de IAuAI.",
        back: "← Volver al sitio",
        footer:
          "© 2026 IAuAI — Todos los derechos reservados · <a href=\"index.html\">Inicio</a><a href=\"politique-confidentialite.html\">Privacidad</a><a href=\"cgv.html\">Condiciones</a>",
        main: `
    <div class="page-header">
      <span class="page-label">Información legal</span>
      <h1>Aviso legal</h1>
      <span class="updated">Última actualización: abril de 2026</span>
    </div>

    <div class="legal-section">
      <h2>1. Editor del sitio</h2>
      <p>El sitio <strong>iauai.fr</strong> es editado por IAuAI.</p>
      <div class="info-card">
        <div class="info-row"><span class="info-label">Razón social</span><span class="info-val">IAuAI</span></div>
        <div class="info-row"><span class="info-label">Forma jurídica</span><span class="info-val">SAS</span></div>
        <div class="info-row"><span class="info-label">Capital social</span><span class="info-val">2 500 €</span></div>
        <div class="info-row"><span class="info-label">Número de registro</span><span class="info-val"><span class="placeholder">[Número de registro — en trámite]</span></span></div>
        <div class="info-row"><span class="info-label">Registro mercantil</span><span class="info-val"><span class="placeholder">[Ciudad de inscripción — en trámite]</span></span></div>
        <div class="info-row"><span class="info-label">NIF intracomunitario</span><span class="info-val"><span class="placeholder">[NIF IVA UE — en trámite]</span></span></div>
        <div class="info-row"><span class="info-label">Domicilio social</span><span class="info-val"><span class="placeholder">[Dirección completa — por completar]</span></span></div>
        <div class="info-row"><span class="info-label">Teléfono</span><span class="info-val"><span class="placeholder">[Número de teléfono — en trámite]</span></span></div>
        <div class="info-row"><span class="info-label">Email</span><span class="info-val"><a href="mailto:contact@iauai.fr">contact@iauai.fr</a></span></div>
        <div class="info-row"><span class="info-label">Sitio web</span><span class="info-val"><a href="https://iauai.fr">https://iauai.fr</a></span></div>
      </div>
    </div>

    <div class="legal-section">
      <h2>2. Director de publicación</h2>
      <div class="info-card">
        <div class="info-row"><span class="info-label">Responsable de publicación</span><span class="info-val"><span class="placeholder">[Nombre del responsable legal — por completar]</span></span></div>
        <div class="info-row"><span class="info-label">Contacto</span><span class="info-val"><a href="mailto:contact@iauai.fr">contact@iauai.fr</a></span></div>
      </div>
    </div>

    <div class="legal-section">
      <h2>3. Alojamiento del sitio</h2>
      <p>El sitio iauai.fr está alojado por:</p>
      <div class="info-card">
        <div class="info-row"><span class="info-label">Proveedor</span><span class="info-val"><span class="placeholder">[Nombre del proveedor — ej.: OVH, Vercel, Netlify]</span></span></div>
        <div class="info-row"><span class="info-label">Domicilio social</span><span class="info-val"><span class="placeholder">[Dirección del proveedor — por completar]</span></span></div>
        <div class="info-row"><span class="info-label">Sitio web</span><span class="info-val"><span class="placeholder">[URL del proveedor — por completar]</span></span></div>
      </div>
    </div>

    <div class="legal-section">
      <h2>4. Propiedad intelectual</h2>
      <p>Todos los contenidos presentes en iauai.fr (textos, imágenes, logotipos, gráficos, vídeos y estructuras de páginas) son propiedad exclusiva de IAuAI o se utilizan con autorización, salvo indicación contraria.</p>
      <p>Cualquier reproducción, representación, modificación, publicación o adaptación, total o parcial, de los elementos del sitio queda prohibida sin autorización previa por escrito de IAuAI.</p>
      <p>El nombre <strong>IAuAI</strong>, el logotipo y la firma « Intelligence · Souveraineté · Territoire » son elementos distintivos de IAuAI y no pueden utilizarse sin autorización.</p>
    </div>

    <div class="legal-section">
      <h2>5. Limitación de responsabilidad</h2>
      <p>IAuAI se esfuerza por garantizar la exactitud y actualización de la información publicada en el sitio. No obstante, se reserva el derecho de corregir o modificar los contenidos en cualquier momento y sin previo aviso.</p>
      <p>IAuAI no podrá ser considerada responsable de daños directos o indirectos derivados del acceso al sitio o del uso de la información que contiene. Tampoco será responsable del acceso a sitios de terceros enlazados desde este sitio.</p>
    </div>

    <div class="legal-section">
      <h2>6. Cookies y rastreadores</h2>
      <p>El sitio iauai.fr utiliza cookies analíticas (Microsoft Clarity, Google Analytics 4) únicamente después de obtener su consentimiento explícito. Estas herramientas permiten medir la audiencia y mejorar la experiencia del usuario. Ningún dato personal se vende a terceros.</p>
      <p>Para saber más sobre la gestión de cookies y sus derechos, consulte nuestra <a href="politique-confidentialite.html">Política de privacidad</a>.</p>
    </div>

    <div class="legal-section">
      <h2>7. Legislación aplicable y jurisdicción</h2>
      <p>El presente aviso legal se rige por la legislación francesa. En caso de litigio relacionado con el uso del sitio, únicamente los tribunales franceses serán competentes.</p>
      <p>Para cualquier pregunta relacionada con este aviso legal, puede contactar con IAuAI en: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a></p>
    </div>`
      }
    }
  };
