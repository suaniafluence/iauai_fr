(() => {
  const locales = {
    fr: { label: "FR", dir: "ltr" },
    en: { label: "EN", dir: "ltr" },
    es: { label: "ES", dir: "ltr" },
    zh: { label: "中文", dir: "ltr" },
    ar: { label: "AR", dir: "rtl" }
  };

  const normalize = (value) => {
    if (!value) return "fr";
    const code = value.toLowerCase().split("-")[0];
    return locales[code] ? code : "fr";
  };

  const getLocale = () => {
    const url = new URL(window.location.href);
    return normalize(url.searchParams.get("lang") || localStorage.getItem("iauai_lang") || navigator.language);
  };

  const textFor = (node, locale) =>
    node.getAttribute(`data-${locale}`) ||
    node.getAttribute("data-en") ||
    node.getAttribute("data-fr") ||
    "";

  const applyLocale = (locale) => {
    localStorage.setItem("iauai_lang", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locales[locale]?.dir || "ltr";
    document.body.classList.toggle("rtl", (locales[locale]?.dir || "ltr") === "rtl");

    document.querySelectorAll("[data-fr], [data-en], [data-es], [data-zh], [data-ar]").forEach((node) => {
      const value = textFor(node, locale);
      if (node.hasAttribute("data-html")) node.innerHTML = value;
      else node.textContent = value;
    });

    document.querySelectorAll("[data-link-base]").forEach((node) => {
      const url = new URL(node.getAttribute("data-link-base"), window.location.href);
      url.searchParams.set("lang", locale);
      node.setAttribute("href", url.pathname + url.search + url.hash);
    });

    document.querySelectorAll("[data-page-title-fr], [data-page-title-en]").forEach((node) => {
      if (node.tagName === "TITLE") {
        document.title = textFor(node, locale);
      }
    });

    document.querySelectorAll("[data-page-desc-fr], [data-page-desc-en]").forEach((node) => {
      if (node.tagName === "META") {
        node.setAttribute("content", textFor(node, locale));
      }
    });

    document.querySelectorAll("[data-locale-select]").forEach((select) => {
      select.value = locale;
      select.onchange = () => {
        const nextLocale = select.value;
        const url = new URL(window.location.href);
        url.searchParams.set("lang", nextLocale);
        window.location.href = url.pathname + url.search + url.hash;
      };
    });
  };

  window.IAUAI_I18N = { applyLocale, getLocale };
})();
