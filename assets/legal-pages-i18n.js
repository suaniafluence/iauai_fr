(() => {
  const localeMeta = {
    fr: { dir: "ltr" },
    en: { dir: "ltr" },
    es: { dir: "ltr" },
    zh: { dir: "ltr" },
    ar: { dir: "rtl" }
  };

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

  const setLangOnLinks = (locale) => {
    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("http")) return;
      const url = new URL(href, window.location.href);
      if (url.pathname.endsWith(".html") || url.pathname === "/" || url.pathname.endsWith("/")) {
        url.searchParams.set("lang", locale);
        link.setAttribute("href", url.pathname + url.search + url.hash);
      }
    });
  };

  // ---------------------------------------------------------------------------
  // TRANSLATIONS  (fr is already in the HTML — only non-FR locales are swapped)
  // ---------------------------------------------------------------------------
  const translate = {

    // =========================================================================
    // MENTIONS LÉGALES
    // =========================================================================
    mentions: {
      en: {
        title: "Legal notice — IAuAI",
        description: "IAuAI legal notice.",
        back: "← Back to the site",
        footer: `© 2026 IAuAI — All rights reserved · <a href="index.html">Home</a><a href="politique-confidentialite.html">Privacy</a><a href="cgv.html">Terms</a>`,
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
        <div class="info-row"><span class="info-label">SIRET</span><span class="info-val"><span class="placeholder">[Registration number — pending]</span></span></div>
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
        <div class="info-row"><span class="info-label">Hosting provider</span><span class="info-val"><span class="placeholder">[Hosting company — e.g. OVH, Vercel, Netlify]</span></span></div>
        <div class="info-row"><span class="info-label">Registered office</span><span class="info-val"><span class="placeholder">[Hosting provider address — to be completed]</span></span></div>
        <div class="info-row"><span class="info-label">Website</span><span class="info-val"><span class="placeholder">[Hosting provider URL — to be completed]</span></span></div>
      </div>
    </div>

    <div class="legal-section">
      <h2>4. Intellectual property</h2>
      <p>All content available on iauai.fr (texts, images, logos, graphics, videos and page structures) is the exclusive property of IAuAI or is used under authorization, unless stated otherwise.</p>
      <p>Any reproduction, representation, modification, publication or adaptation of all or part of the website elements, regardless of the method used, is prohibited without prior written authorization from IAuAI.</p>
      <p>The name <strong>IAuAI</strong>, the logo and the tagline "Intelligence · Sovereignty · Territory" are distinctive assets belonging to IAuAI and may not be used without authorization.</p>
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
        footer: `© 2026 IAuAI — Todos los derechos reservados · <a href="index.html">Inicio</a><a href="politique-confidentialite.html">Privacidad</a><a href="cgv.html">Condiciones</a>`,
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
        <div class="info-row"><span class="info-label">SIRET</span><span class="info-val"><span class="placeholder">[Número de registro — en trámite]</span></span></div>
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
      <p>El nombre <strong>IAuAI</strong>, el logotipo y la firma "Intelligence · Sovereignty · Territory" son elementos distintivos de IAuAI y no pueden utilizarse sin autorización.</p>
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
    },

    // =========================================================================
    // POLITIQUE DE CONFIDENTIALITÉ / PRIVACY POLICY
    // =========================================================================
    privacy: {
      en: {
        title: "Privacy Policy & GDPR — IAuAI",
        description: "IAuAI privacy policy and GDPR compliance.",
        back: "← Back to the site",
        footer: `© 2026 IAuAI — All rights reserved · <a href="index.html">Home</a><a href="mentions-legales.html">Legal notice</a><a href="cgv.html">Terms</a>`,
        main: `
    <div class="page-header">
      <span class="page-label">Data protection · GDPR</span>
      <h1>Privacy Policy</h1>
      <span class="updated">Last updated: April 2026 · Compliant with GDPR (EU) 2016/679</span>
    </div>

    <div class="toc">
      <h3>Table of contents</h3>
      <ol>
        <li><a href="#responsable">Data controller</a></li>
        <li><a href="#donnees-collectees">Data collected</a></li>
        <li><a href="#finalites">Purposes and legal bases</a></li>
        <li><a href="#nda">Confidentiality agreement (NDA)</a></li>
        <li><a href="#cookies">Cookies and trackers</a></li>
        <li><a href="#destinataires">Data recipients</a></li>
        <li><a href="#conservation">Retention periods</a></li>
        <li><a href="#droits">Your rights</a></li>
        <li><a href="#securite">Security</a></li>
        <li><a href="#contact-dpo">Contact & complaints</a></li>
      </ol>
    </div>

    <div class="legal-section" id="responsable">
      <h2>1. Data controller</h2>
      <p>The controller of personal data collected via iauai.fr is:</p>
      <p>
        <strong>IAuAI</strong><br />
        <span style="font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:rgba(43,43,43,0.6)">Registered office: 3 route de Riom, 63530 Volvic – France</span><br />
        Email: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a>
      </p>
    </div>

    <div class="legal-section" id="donnees-collectees">
      <h2>2. Data collected</h2>

      <h3>2.1 Browsing data (with consent)</h3>
      <p>If you accept analytics cookies, we collect anonymised browsing data: pages visited, session duration, traffic source, device type. This data does not allow personal identification.</p>

      <h3>2.2 Contact forms and email</h3>
      <p>When you contact us by email or through a form, we collect: first name, last name, professional email address, company name, and the content of your message.</p>

      <h3>2.3 AI Quiz</h3>
      <p>AI Quiz responses are processed locally in your browser (JavaScript). They are not transmitted or stored on our servers, unless you explicitly choose to share your results.</p>

      <h3>2.4 Client data (in the context of a project)</h3>
      <p>As part of our services, we may process data from your company (business, HR, financial data). These processing activities are governed by a dedicated data processing agreement, in accordance with Article 28 of the GDPR.</p>
    </div>

    <div class="legal-section" id="finalites">
      <h2>3. Purposes and legal bases of processing</h2>
      <table class="cookie-table">
        <thead>
          <tr><th>Purpose</th><th>Legal basis</th><th>Data concerned</th></tr>
        </thead>
        <tbody>
          <tr><td>Responding to contact requests</td><td>Legitimate interest / Contract</td><td>Name, email, message</td></tr>
          <tr><td>Managing the commercial relationship</td><td>Contract / Legal obligation</td><td>Contact details, quotes, contracts</td></tr>
          <tr><td>Audience measurement (analytics)</td><td>Consent</td><td>Anonymised browsing data</td></tr>
          <tr><td>Improving the site and AI quiz</td><td>Consent / Legitimate interest</td><td>Browsing behaviour</td></tr>
          <tr><td>Invoicing and accounting obligations</td><td>Legal obligation</td><td>Billing data</td></tr>
        </tbody>
      </table>
    </div>

    <div class="legal-section" id="nda">
      <h2>4. Confidentiality agreement (NDA) — Our commitment from day one</h2>
      <div class="nda-box">
        <h3>🔐 Confidentiality from the start of every project</h3>
        <p>IAuAI places fundamental importance on protecting its clients' sensitive information. That is why <strong>IAuAI systematically proposes the signing of a non-disclosure agreement (NDA) at the start of every commercial relationship</strong>, including during the exploratory phase before any contract is signed.</p>
        <p>This NDA covers in particular:</p>
        <ul>
          <li>Business, financial and strategic data shared during exchanges</li>
          <li>Information on your company's internal processes and organisation</li>
          <li>Client and supplier data you may communicate to us</li>
          <li>Any document, prototype or information designated as confidential by your company</li>
        </ul>
        <p>The NDA is <strong>bilateral</strong>: it protects your information vis-à-vis IAuAI, and also protects IAuAI's proprietary methods and tools vis-à-vis your organisation.</p>
        <p>To request an NDA before a first meeting, contact us at: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a></p>
      </div>
    </div>

    <div class="legal-section" id="cookies">
      <h2>5. Cookies and trackers</h2>
      <div class="highlight-box">
        <strong>Your consent is required.</strong> Analytics cookies are only placed after your explicit agreement via the consent banner. You can change your choice at any time by clicking "Manage cookies" at the bottom of the page.
      </div>

      <h3>5.1 Strictly necessary cookies</h3>
      <p>These cookies are essential for the website to function and do not require your consent.</p>
      <table class="cookie-table">
        <thead><tr><th>Cookie</th><th>Purpose</th><th>Duration</th><th>Type</th></tr></thead>
        <tbody>
          <tr>
            <td><code>iauai_cookie_consent_v1</code></td>
            <td>Stores your cookie consent choice</td>
            <td>1 year</td>
            <td><span class="tag-nec">Necessary</span></td>
          </tr>
        </tbody>
      </table>

      <h3>5.2 Analytics cookies (subject to consent)</h3>
      <p>Activated only if you have accepted analytics cookies:</p>
      <table class="cookie-table">
        <thead><tr><th>Tool</th><th>Publisher</th><th>Purpose</th><th>Duration</th><th>Type</th></tr></thead>
        <tbody>
          <tr>
            <td>Microsoft Clarity</td>
            <td>Microsoft Corporation</td>
            <td>Session recording, heat maps, anonymised behavioural analysis</td>
            <td>1 year</td>
            <td><span class="tag-ana">Analytics</span></td>
          </tr>
          <tr>
            <td>Google Analytics 4</td>
            <td>Google LLC</td>
            <td>Audience measurement, traffic source, pages visited — anonymised IP</td>
            <td>2 years</td>
            <td><span class="tag-ana">Analytics</span></td>
          </tr>
        </tbody>
      </table>

      <h3>5.3 Transfers outside the EU</h3>
      <p>Microsoft Clarity and Google Analytics 4 may transfer data to the United States. These transfers are governed by the Standard Contractual Clauses (SCCs) approved by the European Commission and the EU-US Data Privacy Framework.</p>
      <p>For more information: <a href="https://privacy.microsoft.com/fr-fr/privacystatement" target="_blank" rel="noopener">Microsoft Privacy Statement</a> · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a></p>
    </div>

    <div class="legal-section" id="destinataires">
      <h2>6. Data recipients</h2>
      <p>Your data may be shared with:</p>
      <ul>
        <li><strong>IAuAI team members</strong> involved in your project, strictly on a need-to-know basis</li>
        <li><strong>Our technical sub-processors</strong> (hosting provider, analytics tools) — only within the scope of their mission and under a GDPR data processing agreement</li>
        <li><strong>Competent authorities</strong> where required by a legal obligation</li>
      </ul>
      <p>IAuAI <strong>never sells your personal data</strong> to any third party.</p>
    </div>

    <div class="legal-section" id="conservation">
      <h2>7. Retention periods</h2>
      <table class="cookie-table">
        <thead><tr><th>Data type</th><th>Retention period</th></tr></thead>
        <tbody>
          <tr><td>Contact requests and prospects</td><td>3 years from the last contact</td></tr>
          <tr><td>Client data (contracts, quotes)</td><td>10 years (accounting obligation)</td></tr>
          <tr><td>Billing data</td><td>10 years (Commercial Code)</td></tr>
          <tr><td>Browsing data (analytics)</td><td>13 months maximum (CNIL)</td></tr>
          <tr><td>Connection logs</td><td>12 months (legal obligation)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="legal-section" id="droits">
      <h2>8. Your rights</h2>
      <p>Under the GDPR, you have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Right of access</strong>: obtain a copy of the data we hold about you</li>
        <li><strong>Right of rectification</strong>: correct inaccurate or incomplete data</li>
        <li><strong>Right to erasure</strong>: request deletion of your data ("right to be forgotten")</li>
        <li><strong>Right to restriction of processing</strong>: request suspension of processing of your data</li>
        <li><strong>Right to data portability</strong>: receive your data in a structured, machine-readable format</li>
        <li><strong>Right to object</strong>: object to processing of your data for direct marketing or legitimate interest purposes</li>
        <li><strong>Right to withdraw consent</strong> at any time for processing based on your consent (analytics cookies)</li>
      </ul>
      <p>To exercise these rights, contact us at: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a><br />We will respond within a maximum of one month from receipt of your request.</p>
    </div>

    <div class="legal-section" id="securite">
      <h2>9. Data security</h2>
      <p>IAuAI implements appropriate technical and organisational measures to protect your data against destruction, loss, alteration, unauthorised disclosure or unauthorised access.</p>
      <p>These measures include: encrypted communications (HTTPS/TLS), restricted data access based on the principle of least privilege, access rights management, and ongoing security awareness training for the team.</p>
      <p>IAuAI operates in line with its data sovereignty promise: our clients retain control of their business data, and we do not store it on uncontrolled infrastructure.</p>
    </div>

    <div class="legal-section" id="contact-dpo">
      <h2>10. Contact & complaints</h2>
      <p>For any questions regarding this policy or to exercise your rights, contact us:</p>
      <p><strong>IAuAI</strong><br />Email: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a><br />Subject: [GDPR Request]</p>
      <p>If you believe your rights have not been respected, you may lodge a complaint with the relevant supervisory authority. In France: <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong>:</p>
      <p>CNIL — 3 Place de Fontenoy · TSA 80715 · 75334 Paris Cedex 07<br /><a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a></p>
    </div>`
      },

      es: {
        title: "Política de privacidad y RGPD — IAuAI",
        description: "Política de privacidad de IAuAI y conformidad con el RGPD.",
        back: "← Volver al sitio",
        footer: `© 2026 IAuAI — Todos los derechos reservados · <a href="index.html">Inicio</a><a href="mentions-legales.html">Aviso legal</a><a href="cgv.html">Condiciones</a>`,
        main: `
    <div class="page-header">
      <span class="page-label">Protección de datos · RGPD</span>
      <h1>Política de privacidad</h1>
      <span class="updated">Última actualización: abril de 2026 · Conforme al RGPD (UE) 2016/679</span>
    </div>

    <div class="toc">
      <h3>Índice</h3>
      <ol>
        <li><a href="#responsable">Responsable del tratamiento</a></li>
        <li><a href="#donnees-collectees">Datos recopilados</a></li>
        <li><a href="#finalites">Finalidades y bases legales</a></li>
        <li><a href="#nda">Acuerdo de confidencialidad (NDA)</a></li>
        <li><a href="#cookies">Cookies y rastreadores</a></li>
        <li><a href="#destinataires">Destinatarios de los datos</a></li>
        <li><a href="#conservation">Plazos de conservación</a></li>
        <li><a href="#droits">Sus derechos</a></li>
        <li><a href="#securite">Seguridad</a></li>
        <li><a href="#contact-dpo">Contacto y reclamaciones</a></li>
      </ol>
    </div>

    <div class="legal-section" id="responsable">
      <h2>1. Responsable del tratamiento</h2>
      <p>El responsable del tratamiento de los datos personales recopilados a través de iauai.fr es:</p>
      <p>
        <strong>IAuAI</strong><br />
        <span style="font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:rgba(43,43,43,0.6)">Domicilio social: 3 route de Riom, 63530 Volvic – Francia</span><br />
        Email: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a>
      </p>
    </div>

    <div class="legal-section" id="donnees-collectees">
      <h2>2. Datos recopilados</h2>

      <h3>2.1 Datos de navegación (con consentimiento)</h3>
      <p>Si acepta las cookies analíticas, recopilamos datos de navegación anonimizados: páginas visitadas, duración de la sesión, origen del tráfico, tipo de dispositivo. Estos datos no permiten su identificación personal.</p>

      <h3>2.2 Formularios de contacto y correo electrónico</h3>
      <p>Cuando nos contacta por correo electrónico o a través de un formulario, recopilamos: nombre, apellidos, dirección de correo electrónico profesional, nombre de la empresa y el contenido de su mensaje.</p>

      <h3>2.3 Quiz IA</h3>
      <p>Las respuestas al quiz de IA se procesan localmente en su navegador (JavaScript). No se transmiten ni se almacenan en nuestros servidores, salvo que elija explícitamente compartir sus resultados.</p>

      <h3>2.4 Datos de clientes (en el marco de una misión)</h3>
      <p>En el marco de nuestras prestaciones, podemos tratar datos de su empresa (datos de negocio, RRHH, financieros). Estos tratamientos se rigen por un acuerdo de tratamiento de datos específico, conforme al artículo 28 del RGPD.</p>
    </div>

    <div class="legal-section" id="finalites">
      <h2>3. Finalidades y bases legales de los tratamientos</h2>
      <table class="cookie-table">
        <thead><tr><th>Finalidad</th><th>Base legal</th><th>Datos afectados</th></tr></thead>
        <tbody>
          <tr><td>Responder a sus solicitudes de contacto</td><td>Interés legítimo / Contrato</td><td>Nombre, email, mensaje</td></tr>
          <tr><td>Gestión de la relación comercial</td><td>Contrato / Obligación legal</td><td>Datos de contacto, presupuestos, contratos</td></tr>
          <tr><td>Medición de audiencia (analítica)</td><td>Consentimiento</td><td>Datos de navegación anonimizados</td></tr>
          <tr><td>Mejora del sitio y del quiz IA</td><td>Consentimiento / Interés legítimo</td><td>Comportamientos de navegación</td></tr>
          <tr><td>Facturación y obligaciones contables</td><td>Obligación legal</td><td>Datos de facturación</td></tr>
        </tbody>
      </table>
    </div>

    <div class="legal-section" id="nda">
      <h2>4. Acuerdo de confidencialidad (NDA) — Nuestro compromiso desde el primer contacto</h2>
      <div class="nda-box">
        <h3>🔐 Confidencialidad desde el inicio de cada misión</h3>
        <p>IAuAI concede una importancia fundamental a la protección de la información sensible de sus clientes. Por ello, <strong>IAuAI propone sistemáticamente la firma de un acuerdo de confidencialidad (NDA) desde el inicio de cada relación comercial</strong>, incluso durante la fase exploratoria anterior a cualquier contrato.</p>
        <p>Este NDA cubre en particular:</p>
        <ul>
          <li>Los datos de negocio, financieros y estratégicos compartidos durante los intercambios</li>
          <li>La información sobre los procesos internos y la organización de su empresa</li>
          <li>Los datos de clientes y proveedores que nos pudiera comunicar</li>
          <li>Cualquier documento, prototipo o información calificada como confidencial por su empresa</li>
        </ul>
        <p>El NDA es <strong>bilateral</strong>: protege su información frente a IAuAI y, recíprocamente, protege los métodos y herramientas propietarios de IAuAI frente a su organización.</p>
        <p>Para solicitar un NDA antes de un primer encuentro, contáctenos en: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a></p>
      </div>
    </div>

    <div class="legal-section" id="cookies">
      <h2>5. Cookies y rastreadores</h2>
      <div class="highlight-box">
        <strong>Se requiere su consentimiento.</strong> Las cookies analíticas solo se instalan tras su acuerdo explícito a través del banner de consentimiento. Puede modificar su elección en cualquier momento haciendo clic en "Gestionar cookies" al pie de página.
      </div>

      <h3>5.1 Cookies estrictamente necesarias</h3>
      <p>Estas cookies son indispensables para el funcionamiento del sitio y no requieren su consentimiento.</p>
      <table class="cookie-table">
        <thead><tr><th>Cookie</th><th>Finalidad</th><th>Duración</th><th>Tipo</th></tr></thead>
        <tbody>
          <tr>
            <td><code>iauai_cookie_consent_v1</code></td>
            <td>Guarda su elección de consentimiento de cookies</td>
            <td>1 año</td>
            <td><span class="tag-nec">Necesaria</span></td>
          </tr>
        </tbody>
      </table>

      <h3>5.2 Cookies analíticas (sujetas a consentimiento)</h3>
      <p>Activadas únicamente si ha aceptado las cookies analíticas:</p>
      <table class="cookie-table">
        <thead><tr><th>Herramienta</th><th>Editor</th><th>Finalidad</th><th>Duración</th><th>Tipo</th></tr></thead>
        <tbody>
          <tr>
            <td>Microsoft Clarity</td>
            <td>Microsoft Corporation</td>
            <td>Grabación de sesiones, mapas de calor, análisis conductual anonimizado</td>
            <td>1 año</td>
            <td><span class="tag-ana">Analítica</span></td>
          </tr>
          <tr>
            <td>Google Analytics 4</td>
            <td>Google LLC</td>
            <td>Medición de audiencia, origen del tráfico, páginas visitadas — IP anonimizada</td>
            <td>2 años</td>
            <td><span class="tag-ana">Analítica</span></td>
          </tr>
        </tbody>
      </table>

      <h3>5.3 Transferencias fuera de la UE</h3>
      <p>Microsoft Clarity y Google Analytics 4 pueden transferir datos a los Estados Unidos. Estas transferencias están encuadradas por las Cláusulas Contractuales Tipo (CCT) aprobadas por la Comisión Europea y por el marco EU-US Data Privacy Framework.</p>
      <p>Para más información: <a href="https://privacy.microsoft.com/fr-fr/privacystatement" target="_blank" rel="noopener">Declaración de privacidad de Microsoft</a> · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Política de privacidad de Google</a></p>
    </div>

    <div class="legal-section" id="destinataires">
      <h2>6. Destinatarios de los datos</h2>
      <p>Sus datos pueden compartirse con:</p>
      <ul>
        <li><strong>Los miembros del equipo de IAuAI</strong> implicados en su expediente, con estricto respeto al principio de necesidad de conocer</li>
        <li><strong>Nuestros subcontratistas técnicos</strong> (proveedor de alojamiento, herramientas analíticas) — exclusivamente en el marco de su misión y bajo un acuerdo de subcontratación RGPD</li>
        <li><strong>Las autoridades competentes</strong> cuando una obligación legal lo exija</li>
      </ul>
      <p>IAuAI <strong>nunca vende sus datos personales</strong> a terceros.</p>
    </div>

    <div class="legal-section" id="conservation">
      <h2>7. Plazos de conservación</h2>
      <table class="cookie-table">
        <thead><tr><th>Tipo de datos</th><th>Plazo de conservación</th></tr></thead>
        <tbody>
          <tr><td>Solicitudes de contacto y prospectos</td><td>3 años desde el último contacto</td></tr>
          <tr><td>Datos de clientes (contratos, presupuestos)</td><td>10 años (obligación contable)</td></tr>
          <tr><td>Datos de facturación</td><td>10 años (Código de Comercio)</td></tr>
          <tr><td>Datos de navegación (analítica)</td><td>13 meses como máximo (CNIL)</td></tr>
          <tr><td>Registros de conexión</td><td>12 meses (obligación legal)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="legal-section" id="droits">
      <h2>8. Sus derechos</h2>
      <p>De conformidad con el RGPD, usted dispone de los siguientes derechos sobre sus datos personales:</p>
      <ul>
        <li><strong>Derecho de acceso</strong>: obtener una copia de los datos que le conciernen</li>
        <li><strong>Derecho de rectificación</strong>: corregir datos inexactos o incompletos</li>
        <li><strong>Derecho de supresión</strong>: solicitar la eliminación de sus datos ("derecho al olvido")</li>
        <li><strong>Derecho a la limitación del tratamiento</strong>: solicitar la suspensión del tratamiento de sus datos</li>
        <li><strong>Derecho a la portabilidad</strong>: recibir sus datos en un formato estructurado y legible por máquina</li>
        <li><strong>Derecho de oposición</strong>: oponerse al tratamiento de sus datos con fines de prospección o interés legítimo</li>
        <li><strong>Derecho a retirar su consentimiento</strong> en cualquier momento para los tratamientos basados en su consentimiento (cookies analíticas)</li>
      </ul>
      <p>Para ejercer estos derechos, contáctenos en: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a><br />Responderemos en un plazo máximo de un mes a partir de la recepción de su solicitud.</p>
    </div>

    <div class="legal-section" id="securite">
      <h2>9. Seguridad de los datos</h2>
      <p>IAuAI aplica las medidas técnicas y organizativas apropiadas para proteger sus datos contra cualquier destrucción, pérdida, alteración, divulgación no autorizada o acceso no autorizado.</p>
      <p>Entre estas medidas: cifrado de comunicaciones (HTTPS/TLS), acceso restringido a los datos según el principio de mínimo privilegio, gestión de derechos de acceso y sensibilización continua del equipo en buenas prácticas de seguridad.</p>
      <p>IAuAI opera en coherencia con su promesa de soberanía de datos: nuestros clientes conservan el control de sus datos de negocio, y no los almacenamos en infraestructuras no controladas.</p>
    </div>

    <div class="legal-section" id="contact-dpo">
      <h2>10. Contacto y reclamaciones</h2>
      <p>Para cualquier pregunta relativa a esta política o para ejercer sus derechos, contáctenos:</p>
      <p><strong>IAuAI</strong><br />Email: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a><br />Asunto: [Solicitud RGPD]</p>
      <p>Si considera que sus derechos no han sido respetados, puede presentar una reclamación ante la autoridad supervisora competente. En Francia: <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong>:</p>
      <p>CNIL — 3 Place de Fontenoy · TSA 80715 · 75334 Paris Cedex 07<br /><a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a></p>
    </div>`
      }
    },

    // =========================================================================
    // CONDITIONS GÉNÉRALES DE PRESTATION (CGV/CGP)
    // =========================================================================
    terms: {
      en: {
        title: "General Terms of Service — IAuAI",
        description: "IAuAI general terms of service.",
        back: "← Back to the site",
        footer: `© 2026 IAuAI — All rights reserved · <a href="index.html">Home</a><a href="mentions-legales.html">Legal notice</a><a href="politique-confidentialite.html">Privacy</a>`,
        main: `
    <div class="page-header">
      <span class="page-label">GTS · Service agreement</span>
      <h1>General Terms of Service</h1>
      <span class="updated">Version 1.0 · April 2026 · Applicable to all IAuAI engagements</span>
    </div>

    <div class="highlight-box">
      <strong>These terms apply</strong> to all consulting, advisory, development and training services provided by IAuAI to its professional clients (B2B), unless otherwise expressly agreed in writing in a specific contract.
    </div>

    <div class="toc">
      <h3>Table of contents</h3>
      <ol>
        <li><a href="#objet">Scope and subject matter</a></li>
        <li><a href="#prestataire">The service provider — IAuAI</a></li>
        <li><a href="#formation-contrat">Contract formation</a></li>
        <li><a href="#confidentialite">Confidentiality and NDA</a></li>
        <li><a href="#propriete">Intellectual property</a></li>
        <li><a href="#obligations-client">Client obligations</a></li>
        <li><a href="#tarifs-paiement">Pricing and payment terms</a></li>
        <li><a href="#delais">Timelines and scheduling</a></li>
        <li><a href="#responsabilite">Liability</a></li>
        <li><a href="#resiliation">Termination</a></li>
        <li><a href="#donnees">Personal data</a></li>
        <li><a href="#droit">Governing law and disputes</a></li>
      </ol>
    </div>

    <div class="legal-section" id="objet">
      <h2>1. Scope and subject matter</h2>
      <p>These General Terms of Service (hereinafter "GTS") define the rights and obligations of IAuAI and its clients in the context of services provided by IAuAI.</p>
      <p>These services include, without limitation:</p>
      <ul>
        <li>Consulting and advisory services in artificial intelligence strategy</li>
        <li>AI maturity audit and assessment</li>
        <li>Development of AI and automation solutions</li>
        <li>Training and upskilling of teams</li>
        <li>Change management support</li>
        <li>Deployment and integration of AI tools</li>
      </ul>
      <p>These GTS take precedence over any client document, unless a specific written derogation is signed by both parties.</p>
    </div>

    <div class="legal-section" id="prestataire">
      <h2>2. The service provider — IAuAI</h2>
      <div class="info-card">
        <p><strong>IAuAI</strong></p>
        <p>
          <span style="font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:rgba(43,43,43,0.5)">SAS – SIRET registration in progress,
          Registered office: 3 route de Riom, 63530 Volvic</span><br />
          Email: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a><br />
          Website: <a href="https://iauai.fr">https://iauai.fr</a>
        </p>
      </div>
    </div>

    <div class="legal-section" id="formation-contrat">
      <h2>3. Contract formation</h2>

      <h3>3.1 Quote and order</h3>
      <p>Each engagement is subject to a detailed quote issued by IAuAI. The contract is formed upon receipt of the quote signed by the client, together with payment of the agreed deposit or an official purchase order.</p>

      <h3>3.2 Exploratory phase (pre-contract)</h3>
      <p>IAuAI may conduct a preliminary, no-commitment exchange (typically 30 to 60 minutes) to qualify requirements. This exchange is free of charge. Any analysis, proposal or deliverable produced beyond this exchange will be invoiced.</p>

      <h3>3.3 Amendments</h3>
      <p>Any modification to the scope of an ongoing engagement must be the subject of a written amendment signed by both parties. IAuAI reserves the right to adjust the price accordingly.</p>
    </div>

    <div class="legal-section" id="confidentialite">
      <h2>4. Confidentiality and non-disclosure agreement (NDA)</h2>

      <div class="highlight-box">
        <strong>🔐 IAuAI systematically proposes an NDA at the start of every engagement.</strong> Your confidentiality is our priority, even before the contract is signed.
      </div>

      <h3>4.1 Confidentiality commitment</h3>
      <p>IAuAI undertakes to treat as strictly confidential all information communicated by the client in the context of the engagement: business, financial, strategic, technical, commercial data, or data relating to the client's customers and partners.</p>
      <p>This commitment applies to all IAuAI team members involved in the engagement and remains in force throughout the engagement and for a period of <strong>3 (three) years</strong> after the end of the service, unless otherwise agreed in writing.</p>

      <h3>4.2 Bilateral non-disclosure agreement (NDA)</h3>
      <p><strong>IAuAI proposes to each client, at the start of the commercial relationship — including before any contract is signed — the signing of a bilateral non-disclosure agreement (NDA).</strong></p>
      <p>This agreement is bilateral: it protects the client's confidential information vis-à-vis IAuAI and, reciprocally, protects IAuAI's proprietary methods, tools and know-how vis-à-vis the client.</p>
      <p>On simple request, IAuAI provides its standard NDA template. The client may also propose its own template, subject to validation by IAuAI.</p>

      <h3>4.3 Exceptions</h3>
      <p>The confidentiality obligation does not apply to information that: (i) was already publicly known at the time of disclosure, (ii) becomes public without fault of IAuAI, (iii) is legitimately obtained from third parties not bound by a confidentiality obligation, or (iv) must be disclosed pursuant to a legal or regulatory obligation.</p>
    </div>

    <div class="legal-section" id="propriete">
      <h2>5. Intellectual property</h2>

      <h3>5.1 IAuAI tools and methods</h3>
      <p>The methods, frameworks, generic tools, templates and any other pre-existing elements developed by IAuAI remain the exclusive property of IAuAI. They may be used in the context of the client's engagement without being transferred as property.</p>

      <h3>5.2 Specific deliverables</h3>
      <p>Deliverables created specifically for the client in the context of the engagement (reports, analyses, bespoke code, dedicated tools) are transferred to the client exclusively and definitively, after full payment of the corresponding services.</p>

      <h3>5.3 Commercial reference</h3>
      <p>Unless the client objects in writing, IAuAI reserves the right to mention the client's name and a generic description of the service rendered as a commercial reference, without disclosing any confidential information.</p>
    </div>

    <div class="legal-section" id="obligations-client">
      <h2>6. Client obligations</h2>
      <p>To enable the proper execution of the services, the client undertakes to:</p>
      <ul>
        <li>Designate a primary point of contact with the necessary decision-making authority</li>
        <li>Provide in a timely manner the information, access and resources necessary for the engagement</li>
        <li>Inform IAuAI of any constraint (regulatory, technical, organisational) likely to affect the engagement</li>
        <li>Validate interim deliverables within the agreed timeframes</li>
        <li>Respect IAuAI's intellectual property rights</li>
        <li>Meet payment obligations on the agreed due dates</li>
      </ul>
      <p>Any delay by the client in providing necessary elements automatically results in a corresponding extension of delivery timelines, without this constituting a breach by IAuAI of its obligations.</p>
    </div>

    <div class="legal-section" id="tarifs-paiement">
      <h2>7. Pricing and payment terms</h2>

      <h3>7.1 Pricing</h3>
      <p>Prices are defined in each quote. They are expressed in euros exclusive of tax (excl. VAT) and are subject to VAT at the rate in force on the invoice date. Quotes are valid for 30 days from their issue date.</p>

      <h3>7.2 Deposit</h3>
      <p>A deposit of <strong>30% of the total amount (excl. VAT)</strong> is required on order for any service with a value exceeding €1,000 (excl. VAT). For long-term engagements, a monthly payment schedule may be agreed.</p>

      <h3>7.3 Payment terms</h3>
      <p>Invoices are payable at <strong>30 days net</strong> from the invoice date, unless otherwise stated on the invoice. Any late payment entails the application of late payment penalties at the statutory rate in force, as well as a fixed compensation of €40 for collection costs in accordance with applicable law.</p>

      <h3>7.4 Suspension</h3>
      <p>In the event of non-payment at the due date, IAuAI reserves the right to suspend the ongoing service after formal notice has remained unanswered for 8 business days.</p>
    </div>

    <div class="legal-section" id="delais">
      <h2>8. Timelines and scheduling</h2>
      <p>Delivery timelines are indicated in the quote or engagement proposal. They constitute good-faith indicative timelines and may be adjusted in the event of force majeure, client delay in providing necessary elements, or scope changes.</p>
      <p>IAuAI undertakes to inform the client without delay of any risk of schedule slippage and to propose a corrective solution.</p>
    </div>

    <div class="legal-section" id="responsabilite">
      <h2>9. Liability</h2>

      <h3>9.1 Best-efforts obligation</h3>
      <p>IAuAI undertakes to deploy all necessary means for the proper execution of the service. IAuAI is bound by a best-efforts obligation and not an obligation of result, unless expressly stated otherwise in the contract.</p>

      <h3>9.2 Limitation of liability</h3>
      <p>IAuAI's total liability, for any reason whatsoever, is limited to the amounts actually received in respect of the relevant engagement. IAuAI shall not be held liable for indirect damages (loss of profit, loss of revenue, reputational damage).</p>

      <h3>9.3 Force majeure</h3>
      <p>IAuAI cannot be held liable for any delay or failure to perform resulting from a force majeure event within the meaning of applicable French law.</p>
    </div>

    <div class="legal-section" id="resiliation">
      <h2>10. Termination</h2>
      <p>Either party may terminate the contract in the event of a serious breach by the other party of its obligations, after formal notice by registered letter with acknowledgement of receipt has remained without effect for 15 business days.</p>
      <p>In the event of termination at the client's initiative without fault by IAuAI, services rendered up to the termination date are due in full. A lump-sum compensation equivalent to 20% of the amount remaining to be performed may be applied to cover organisational costs.</p>
    </div>

    <div class="legal-section" id="donnees">
      <h2>11. Personal data</h2>
      <p>In the context of the commercial relationship, IAuAI collects and processes the personal data of the client's contacts (name, first name, email, professional telephone number) in accordance with the GDPR.</p>
      <p>Where the engagement involves the processing of personal data belonging to the client, a data processing agreement compliant with Article 28 of the GDPR is established between the parties.</p>
      <p>For more information, please consult our <a href="politique-confidentialite.html">Privacy policy</a>.</p>
    </div>

    <div class="legal-section" id="droit">
      <h2>12. Governing law and dispute resolution</h2>
      <p>These GTS are governed by French law.</p>
      <p>In the event of a dispute relating to the interpretation or execution of these GTS, the parties undertake to seek an amicable solution before any legal proceedings. In the absence of an amicable settlement within 30 days of notification of the dispute, the courts of competent jurisdiction within the jurisdiction of IAuAI's registered office shall have sole jurisdiction.</p>
      <p>For any enquiry, contact IAuAI: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a></p>
    </div>`
      },

      es: {
        title: "Condiciones Generales de Prestación — IAuAI",
        description: "Condiciones generales de prestación de servicios de IAuAI.",
        back: "← Volver al sitio",
        footer: `© 2026 IAuAI — Todos los derechos reservados · <a href="index.html">Inicio</a><a href="mentions-legales.html">Aviso legal</a><a href="politique-confidentialite.html">Privacidad</a>`,
        main: `
    <div class="page-header">
      <span class="page-label">CGP · Contrato de prestación</span>
      <h1>Condiciones Generales de Prestación</h1>
      <span class="updated">Versión 1.0 · Abril 2026 · Aplicable a todas las misiones de IAuAI</span>
    </div>

    <div class="highlight-box">
      <strong>Estas condiciones se aplican</strong> a todas las prestaciones de consultoría, acompañamiento, desarrollo y formación realizadas por IAuAI para sus clientes profesionales (B2B), salvo derogación escrita expresamente acordada en un contrato específico.
    </div>

    <div class="toc">
      <h3>Índice</h3>
      <ol>
        <li><a href="#objet">Objeto y ámbito de aplicación</a></li>
        <li><a href="#prestataire">El prestador — IAuAI</a></li>
        <li><a href="#formation-contrat">Formación del contrato</a></li>
        <li><a href="#confidentialite">Confidencialidad y NDA</a></li>
        <li><a href="#propriete">Propiedad intelectual</a></li>
        <li><a href="#obligations-client">Obligaciones del cliente</a></li>
        <li><a href="#tarifs-paiement">Tarifas y condiciones de pago</a></li>
        <li><a href="#delais">Plazos y planificación</a></li>
        <li><a href="#responsabilite">Responsabilidad</a></li>
        <li><a href="#resiliation">Resolución del contrato</a></li>
        <li><a href="#donnees">Datos personales</a></li>
        <li><a href="#droit">Legislación aplicable y litigios</a></li>
      </ol>
    </div>

    <div class="legal-section" id="objet">
      <h2>1. Objeto y ámbito de aplicación</h2>
      <p>Las presentes Condiciones Generales de Prestación (en adelante "CGP") definen los derechos y obligaciones de IAuAI y de sus clientes en el marco de las prestaciones de servicios realizadas por IAuAI.</p>
      <p>Estas prestaciones comprenden, sin carácter limitativo:</p>
      <ul>
        <li>Consultoría y acompañamiento en estrategia de inteligencia artificial</li>
        <li>Auditoría y diagnóstico de madurez IA</li>
        <li>Desarrollo de soluciones IA y de automatización</li>
        <li>Formación y capacitación de equipos</li>
        <li>Acompañamiento en la gestión del cambio</li>
        <li>Despliegue e integración de herramientas IA</li>
      </ul>
      <p>Las presentes CGP prevalecen sobre cualquier documento del cliente, salvo derogación escrita firmada por ambas partes.</p>
    </div>

    <div class="legal-section" id="prestataire">
      <h2>2. El prestador — IAuAI</h2>
      <div class="info-card">
        <p><strong>IAuAI</strong></p>
        <p>
          <span style="font-family:'JetBrains Mono',monospace;font-size:0.85rem;color:rgba(43,43,43,0.5)">SAS – SIRET en trámite de inscripción,
          Domicilio social: 3 route de Riom, 63530 Volvic</span><br />
          Email: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a><br />
          Sitio web: <a href="https://iauai.fr">https://iauai.fr</a>
        </p>
      </div>
    </div>

    <div class="legal-section" id="formation-contrat">
      <h2>3. Formación del contrato</h2>

      <h3>3.1 Presupuesto y pedido</h3>
      <p>Toda prestación da lugar a un presupuesto detallado elaborado por IAuAI. El contrato queda formado a la recepción del presupuesto firmado por el cliente, junto con el pago del anticipo acordado o un pedido oficial.</p>

      <h3>3.2 Fase exploratoria (precontractual)</h3>
      <p>IAuAI puede realizar un intercambio preliminar sin compromiso (generalmente de 30 a 60 minutos) para identificar las necesidades. Este intercambio es gratuito. Cualquier análisis, propuesta o entregable producido más allá de este intercambio será facturado.</p>

      <h3>3.3 Modificaciones</h3>
      <p>Cualquier modificación del alcance de la misión en curso deberá ser objeto de una adenda escrita firmada por ambas partes. IAuAI se reserva el derecho de ajustar el precio en consecuencia.</p>
    </div>

    <div class="legal-section" id="confidentialite">
      <h2>4. Confidencialidad y acuerdo de no divulgación (NDA)</h2>

      <div class="highlight-box">
        <strong>🔐 IAuAI propone sistemáticamente un NDA al inicio de cada misión.</strong> Su confidencialidad es nuestra prioridad, incluso antes de la firma del contrato.
      </div>

      <h3>4.1 Compromiso de confidencialidad</h3>
      <p>IAuAI se compromete a tratar como estrictamente confidencial toda la información comunicada por el cliente en el marco de la misión: datos de negocio, financieros, estratégicos, técnicos, comerciales, o relativos a sus clientes y socios.</p>
      <p>Este compromiso se aplica a todos los miembros del equipo de IAuAI implicados en la misión y se mantiene durante toda la duración de la misma, así como durante un período de <strong>3 (tres) años</strong> a partir de la finalización de la prestación, salvo acuerdo escrito en contrario.</p>

      <h3>4.2 Acuerdo de confidencialidad bilateral (NDA)</h3>
      <p><strong>IAuAI propone a cada cliente, desde el inicio de la relación comercial — incluido antes de cualquier contrato firmado —, la firma de un acuerdo de confidencialidad bilateral (NDA).</strong></p>
      <p>Este acuerdo es bilateral: protege la información confidencial del cliente frente a IAuAI y, recíprocamente, protege los métodos, herramientas y conocimientos propietarios de IAuAI frente al cliente.</p>
      <p>A simple solicitud, IAuAI facilita su modelo estándar de NDA. El cliente también puede proponer su propio modelo, sujeto a validación por parte de IAuAI.</p>

      <h3>4.3 Excepciones</h3>
      <p>La obligación de confidencialidad no se aplica a la información que: (i) ya era de dominio público en el momento de su divulgación, (ii) pasa a ser pública sin culpa de IAuAI, (iii) se obtiene legítimamente de terceros no vinculados por una obligación de confidencialidad, o (iv) debe divulgarse en virtud de una obligación legal o reglamentaria.</p>
    </div>

    <div class="legal-section" id="propriete">
      <h2>5. Propiedad intelectual</h2>

      <h3>5.1 Herramientas y métodos de IAuAI</h3>
      <p>Los métodos, marcos de trabajo, herramientas genéricas, plantillas y cualquier otro elemento preexistente desarrollado por IAuAI siguen siendo propiedad exclusiva de IAuAI. Pueden utilizarse en el marco de la misión del cliente sin que se transfieran como propiedad.</p>

      <h3>5.2 Entregables específicos</h3>
      <p>Los entregables creados específicamente para el cliente en el marco de la misión (informes, análisis, código a medida, herramientas dedicadas) se ceden al cliente de forma exclusiva y definitiva, tras el pago íntegro de las prestaciones correspondientes.</p>

      <h3>5.3 Referencia comercial</h3>
      <p>Salvo oposición escrita del cliente, IAuAI se reserva el derecho de mencionar el nombre del cliente y una descripción genérica de la prestación realizada como referencia comercial, sin divulgar información confidencial.</p>
    </div>

    <div class="legal-section" id="obligations-client">
      <h2>6. Obligaciones del cliente</h2>
      <p>Para permitir la correcta ejecución de las prestaciones, el cliente se compromete a:</p>
      <ul>
        <li>Designar un interlocutor de referencia con las facultades de decisión necesarias</li>
        <li>Proporcionar en tiempo y forma la información, accesos y recursos necesarios para la realización de la misión</li>
        <li>Informar a IAuAI de cualquier restricción (reglamentaria, técnica, organizativa) que pueda afectar a la misión</li>
        <li>Validar los entregables intermedios en los plazos acordados</li>
        <li>Respetar los derechos de propiedad intelectual de IAuAI</li>
        <li>Efectuar los pagos en las fechas acordadas</li>
      </ul>
      <p>Cualquier retraso del cliente en la aportación de los elementos necesarios conlleva de pleno derecho un aplazamiento de los plazos de entrega, sin que ello constituya un incumplimiento de las obligaciones de IAuAI.</p>
    </div>

    <div class="legal-section" id="tarifs-paiement">
      <h2>7. Tarifas y condiciones de pago</h2>

      <h3>7.1 Tarifas</h3>
      <p>Las tarifas se definen en cada presupuesto. Se expresan en euros sin impuestos (excl. IVA) y están sujetas al IVA al tipo vigente en la fecha de facturación. Los presupuestos son válidos durante 30 días a partir de su fecha de emisión.</p>

      <h3>7.2 Anticipo</h3>
      <p>Se requiere un anticipo del <strong>30% del importe total (excl. IVA)</strong> al realizar el pedido para cualquier prestación de importe superior a 1.000 € (excl. IVA). Para misiones de larga duración, puede acordarse un calendario de pagos mensual.</p>

      <h3>7.3 Plazos de pago</h3>
      <p>Las facturas son pagaderas a <strong>30 días netos</strong> desde la fecha de emisión, salvo indicación contraria en la factura. Cualquier retraso en el pago conlleva la aplicación de penalizaciones por mora al tipo legal vigente, así como una indemnización a tanto alzado por gastos de cobro de 40 € conforme a la legislación aplicable.</p>

      <h3>7.4 Suspensión</h3>
      <p>En caso de impago en la fecha de vencimiento, IAuAI se reserva el derecho de suspender la prestación en curso tras requerimiento formal que haya quedado sin efecto durante 8 días hábiles.</p>
    </div>

    <div class="legal-section" id="delais">
      <h2>8. Plazos y planificación</h2>
      <p>Los plazos de ejecución se indican en el presupuesto o la propuesta de misión. Constituyen plazos orientativos de buena fe y pueden ajustarse en caso de fuerza mayor, retraso del cliente en la aportación de elementos necesarios, o modificación del alcance.</p>
      <p>IAuAI se compromete a informar al cliente sin demora de cualquier riesgo de desviación del calendario y a proponer una solución correctora.</p>
    </div>

    <div class="legal-section" id="responsabilite">
      <h2>9. Responsabilidad</h2>

      <h3>9.1 Obligación de medios</h3>
      <p>IAuAI se compromete a poner en práctica todos los medios necesarios para la correcta realización de la prestación. IAuAI está sujeta a una obligación de medios y no de resultado, salvo cláusula expresa en contrario en el contrato.</p>

      <h3>9.2 Limitación de responsabilidad</h3>
      <p>La responsabilidad total de IAuAI, por cualquier causa, se limita al importe de las cantidades efectivamente percibidas en el marco de la misión en cuestión. IAuAI no podrá ser considerada responsable de daños indirectos (lucro cesante, pérdida de facturación, daño reputacional).</p>

      <h3>9.3 Fuerza mayor</h3>
      <p>IAuAI no puede ser considerada responsable de un retraso o incumplimiento derivado de un caso de fuerza mayor en el sentido de la legislación francesa aplicable.</p>
    </div>

    <div class="legal-section" id="resiliation">
      <h2>10. Resolución del contrato</h2>
      <p>Cualquiera de las partes podrá resolver el contrato en caso de incumplimiento grave de la otra parte de sus obligaciones, tras requerimiento formal mediante carta certificada con acuse de recibo que haya quedado sin efecto durante 15 días hábiles.</p>
      <p>En caso de resolución a iniciativa del cliente sin culpa de IAuAI, las prestaciones realizadas hasta la fecha de resolución son exigibles íntegramente. Podrá aplicarse una indemnización a tanto alzado equivalente al 20% del importe pendiente de ejecutar para compensar los costes de organización.</p>
    </div>

    <div class="legal-section" id="donnees">
      <h2>11. Datos personales</h2>
      <p>En el marco de la relación comercial, IAuAI recopila y trata los datos personales de los contactos del cliente (nombre, apellidos, correo electrónico, teléfono profesional) conforme al RGPD.</p>
      <p>Cuando la misión implique el tratamiento de datos personales pertenecientes al cliente, se establece entre las partes un acuerdo de subcontratación de datos personales conforme al artículo 28 del RGPD.</p>
      <p>Para más información, consulte nuestra <a href="politique-confidentialite.html">Política de privacidad</a>.</p>
    </div>

    <div class="legal-section" id="droit">
      <h2>12. Legislación aplicable y resolución de litigios</h2>
      <p>Las presentes CGP se rigen por la legislación francesa.</p>
      <p>En caso de litigio relativo a la interpretación o ejecución de las presentes CGP, las partes se comprometen a buscar una solución amistosa antes de cualquier recurso judicial. A falta de acuerdo amistoso en un plazo de 30 días a partir de la notificación del litigio, los tribunales competentes del domicilio social de IAuAI serán los únicos competentes.</p>
      <p>Para cualquier consulta, contacte con IAuAI: <a href="mailto:contact@iauai.fr">contact@iauai.fr</a></p>
    </div>`
      }
    }
  };

  // ---------------------------------------------------------------------------
  // APPLY
  // ---------------------------------------------------------------------------
  const apply = (locale) => {
    const key = pageKey();
    if (!key) return;

    localStorage.setItem("iauai_lang", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = localeMeta[locale]?.dir || "ltr";
    document.body.classList.toggle("rtl", (localeMeta[locale]?.dir || "ltr") === "rtl");

    const select = document.getElementById("langSelect");
    if (select) {
      select.value = locale;
      select.onchange = () => {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", select.value);
        window.location.href = url.pathname + url.search + url.hash;
      };
    }

    // FR: the HTML already contains the French content — only update chrome elements
    if (locale !== "fr") {
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
    }

    setLangOnLinks(locale);
  };

  document.addEventListener("DOMContentLoaded", () => {
    apply(getLocale());
  });
})();
