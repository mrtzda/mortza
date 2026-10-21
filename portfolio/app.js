(() => {
  const S = window.SITE;

  // Fixed interface words (project content lives in content.js)
  const UI = {
    en: {
      "nav.work": "Work", "nav.about": "About", "nav.contact": "Contact",
      cta: "See the work ↓", all: "All", tools: "Tools", contactHead: "Let's make something",
      role: "My role", did: "What I did", email: "Email", instagram: "Instagram",
      soon: "Video coming soon", watchOn: "Watch on", switchTo: "فارسی",
    },
    fa: {
      "nav.work": "نمونه‌کارها", "nav.about": "درباره‌ی من", "nav.contact": "تماس",
      cta: "دیدن کارها ↓", all: "همه", tools: "ابزارها", contactHead: "بیا با هم بسازیم",
      role: "نقش من", did: "کارهایی که انجام دادم", email: "ایمیل", instagram: "اینستاگرام",
      soon: "ویدئو به‌زودی", watchOn: "دیدن در", switchTo: "English",
    },
  };

  const $ = (q, el = document) => el.querySelector(q);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const faDigits = (s) => String(s).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

  let lang = pickLang();
  let filter = "all";
  let current = null;

  function pickLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "fa" || q === "en") return q;
    try { const saved = localStorage.getItem("lang"); if (saved === "fa" || saved === "en") return saved; } catch {}
    return "en";
  }

  const t = (obj) => (obj && typeof obj === "object" ? obj[lang] ?? obj.en : obj ?? "");
  const num = (n) => (lang === "fa" ? faDigits(n) : String(n));
  const catLabel = (id) => t(S.categories.find((c) => c.id === id)?.label);

  function render() {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "fa" ? "rtl" : "ltr";
    document.title = `${t(S.name)} — ${t(S.title)}`;

    document.querySelectorAll("[data-t]").forEach((el) => {
      const k = el.dataset.t;
      el.textContent = UI[lang][k] ?? t(S[k]);
    });
    $(".lang").textContent = UI[lang].switchTo;

    renderTabs();
    renderGrid();

    const p = $(".portrait");
    p.src = S.about.photo;
    p.alt = t(S.name);
    $(".bio").textContent = t(S.about.text);
    $(".tools").innerHTML = S.about.tools.map((x) => `<li>${esc(x)}</li>`).join("");

    const c = S.contact;
    $(".contact-links").innerHTML = [
      c.email && `<a href="mailto:${esc(c.email)}"><span>${UI[lang].email}</span>${esc(c.email)}</a>`,
      c.instagram && `<a href="https://instagram.com/${esc(c.instagram)}" target="_blank" rel="noopener"><span>${UI[lang].instagram}</span>@${esc(c.instagram)}</a>`,
    ].filter(Boolean).join("");

    $(".copy").textContent = `© ${num(new Date().getFullYear())} ${t(S.name)}`;
    if (current) fillInfo(current);
  }

  function renderTabs() {
    const tabs = [{ id: "all", label: UI[lang].all }, ...S.categories.map((c) => ({ id: c.id, label: t(c.label) }))];
    $(".tabs").innerHTML = tabs.map((c) => {
      const n = c.id === "all" ? S.projects.length : S.projects.filter((p) => p.category === c.id).length;
      return `<button role="tab" data-cat="${c.id}" aria-selected="${c.id === filter}">${esc(c.label)}<span class="count">${num(n)}</span></button>`;
    }).join("");
  }

  function renderGrid() {
    $(".grid").innerHTML = S.projects.map((p, i) => `
      <button class="card${filter !== "all" && p.category !== filter ? " hide" : ""}" data-i="${i}" style="animation-delay:${(i % 6) * 60}ms">
        <div class="frame">
          <img src="${esc(cover(p))}" alt="" loading="lazy">
          <span class="play" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg></span>
        </div>
        <div class="meta"><h3>${esc(t(p.title))}</h3><span class="year">${num(p.year)}</span></div>
        <p class="role">${esc(catLabel(p.category))} · ${esc(t(p.role))}</p>
      </button>`).join("");
  }

  const cover = (p) => p.cover || (p.youtube ? `https://i.ytimg.com/vi/${p.youtube}/hqdefault.jpg` : "");

  function open(i) {
    current = S.projects[i];
    const body = $(".viewer-body");
    body.classList.toggle("is-vertical", !!current.vertical);
    $(".player").innerHTML = current.youtube
      ? `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(current.youtube)}?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="${esc(t(current.title))}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`
      : `<img src="${esc(cover(current))}" alt=""><p class="soon">${UI[lang].soon}</p>`;
    fillInfo(current);
    $(".viewer").showModal();
  }

  function fillInfo(p) {
    const links = [...(p.youtube ? [{ label: "YouTube", url: `https://youtu.be/${p.youtube}` }] : []), ...(p.links || [])];
    $(".info").innerHTML = `
      <p class="label">${esc(catLabel(p.category))} · ${num(p.year)}</p>
      <h2>${esc(t(p.title))}</h2>
      <p class="summary">${esc(t(p.summary))}</p>
      <div class="cols">
        <div><p class="label">${UI[lang].role}</p><p>${esc(t(p.role))}</p></div>
        <div><p class="label">${UI[lang].did}</p><ul>${(t(p.did) || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
      </div>
      ${links.length ? `<div class="ext">${links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${UI[lang].watchOn} ${esc(l.label)} ↗</a>`).join("")}</div>` : ""}`;
  }

  function close() {
    $(".viewer").close();
  }

  // events
  $(".lang").addEventListener("click", () => {
    lang = lang === "en" ? "fa" : "en";
    try { localStorage.setItem("lang", lang); } catch {}
    const u = new URL(location.href); u.searchParams.delete("lang"); history.replaceState(null, "", u);
    render();
  });
  $(".tabs").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-cat]");
    if (!b) return;
    filter = b.dataset.cat;
    renderTabs();
    renderGrid();
  });
  $(".grid").addEventListener("click", (e) => {
    const c = e.target.closest(".card");
    if (c) open(+c.dataset.i);
  });
  const viewer = $(".viewer");
  $(".close").addEventListener("click", close);
  viewer.addEventListener("click", (e) => { if (e.target === viewer) close(); });
  viewer.addEventListener("close", () => { $(".player").innerHTML = ""; current = null; });

  render();
})();
