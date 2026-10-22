(() => {
  const S = window.SITE;

  // Fixed interface words (project content lives in content.js)
  const UI = {
    en: {
      "nav.work": "Work", "nav.about": "About", "nav.contact": "Contact",
      cta: "See the work ↓", all: "All", tools: "Tools", contactHead: "From idea to final cut, together.",
      role: "My role", did: "What I did", email: "Gmail", instagram: "Instagram",
      soon: "Video coming soon", watchOn: "Watch on", switchTo: "فارسی", video: "Video", credits: "Written by",
    },
    fa: {
      "nav.work": "نمونه‌کارها", "nav.about": "درباره‌ی من", "nav.contact": "تماس",
      cta: "دیدن کارها ↓", all: "همه", tools: "ابزارها", contactHead: "از ایده تا خروجی نهایی، با هم.",
      role: "نقش من", did: "کارهایی که انجام دادم", email: "جیمیل", instagram: "اینستاگرام",
      soon: "ویدئو به‌زودی", watchOn: "دیدن در", switchTo: "English", video: "ویدئو", credits: "نویسندگان",
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
  const dot = (...parts) => parts.filter(Boolean).join(" · ");

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
        <p class="role">${esc(dot(catLabel(p.category), t(p.role)))}</p>
        ${p.stat ? `<p class="card-stat">${esc(t(p.stat))}</p>` : ""}
      </button>`).join("");
  }

  // A project can have one video (youtube / instagram) or several (videos: [...])
  const videosOf = (p) => p.videos?.length ? p.videos : (p.youtube || p.instagram) ? [{ youtube: p.youtube, instagram: p.instagram }] : [];
  const igId = (url) => (String(url || "").match(/instagram\.com\/(?:reel|p|tv)\/([\w-]+)/) || [])[1];
  const cover = (p) => p.cover || (videosOf(p)[0]?.youtube ? `https://i.ytimg.com/vi/${videosOf(p)[0].youtube}/hqdefault.jpg` : "");
  let part = 0;

  function open(i) {
    current = S.projects[i];
    part = 0;
    $(".viewer-body").classList.toggle("is-vertical", !!current.vertical);
    play();
    fillInfo(current);
    $(".viewer").showModal();
  }

  function play() {
    const v = videosOf(current)[part];
    const el = $(".player");
    const ig = v && !v.youtube && !v.drive && !v.file && igId(v.instagram);
    el.classList.toggle("ig", !!ig);
    if (v?.youtube) {
      el.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.youtube)}?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="${esc(t(current.title))}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    } else if (v?.file) {
      el.innerHTML = `<video src="${esc(v.file)}" poster="${esc(cover(current))}" controls autoplay playsinline preload="metadata"></video>`;
    } else if (v?.drive) {
      el.innerHTML = `<iframe src="https://drive.google.com/file/d/${encodeURIComponent(v.drive)}/preview" title="${esc(t(current.title))}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    } else if (ig) {
      el.innerHTML = `<iframe src="https://www.instagram.com/reel/${ig}/embed/" title="${esc(t(current.title))}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen scrolling="no"></iframe>`;
    } else {
      el.innerHTML = `<img src="${esc(cover(current))}" alt=""><p class="soon">${esc(t(current.soon) || UI[lang].soon)}</p>`;
    }
  }

  function fillInfo(p) {
    const vids = videosOf(p);
    const links = [
      ...vids.filter((v) => v.youtube).map((v) => ({ label: "YouTube", url: `https://youtu.be/${v.youtube}` })),
      ...vids.filter((v) => v.instagram && !v.youtube && !v.drive).map((v) => ({ label: "Instagram", url: v.instagram })),
      ...(p.links || []),
    ].filter((l, i, a) => a.findIndex((x) => x.url === l.url) === i);
    const list = (arr) => `<ul>${(arr || []).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
    $(".info").innerHTML = `
      <p class="label">${esc(dot(catLabel(p.category), t(p.client), num(p.year)))}</p>
      <h2>${esc(t(p.title))}</h2>
      ${p.stat ? `<p class="stat">${esc(t(p.stat))}</p>` : ""}
      ${vids.length > 1 ? `<div class="parts">${vids.map((v, k) => `<button type="button" data-part="${k}" aria-pressed="${k === part}">${esc(t(v.label) || `${UI[lang].video} ${num(k + 1)}`)}</button>`).join("")}</div>` : ""}
      <p class="summary">${esc(t(p.summary))}</p>
      <div class="cols">
        <div><p class="label">${UI[lang].role}</p><p>${esc(t(p.role))}</p></div>
        <div><p class="label">${UI[lang].did}</p>${list(t(p.did))}</div>
        ${p.credits ? `<div><p class="label">${UI[lang].credits}</p><p>${esc(t(p.credits))}</p></div>` : ""}
        ${p.tools?.length ? `<div><p class="label">${UI[lang].tools}</p>${list(p.tools)}</div>` : ""}
      </div>
      ${p.note ? `<p class="note">${esc(t(p.note))}</p>` : ""}
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
  $(".info").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-part]");
    if (!b || !current) return;
    part = +b.dataset.part;
    play();
    fillInfo(current);
  });
  const viewer = $(".viewer");
  $(".close").addEventListener("click", close);
  viewer.addEventListener("click", (e) => { if (e.target === viewer) close(); });
  viewer.addEventListener("close", () => { $(".player").innerHTML = ""; current = null; });

  render();
})();
