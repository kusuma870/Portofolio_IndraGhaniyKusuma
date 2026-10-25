// ====== DATA BAWAAN (diambil dari CV). Edit di sini untuk mengubah isi default ======
const DEFAULT = {
  profile: {
    name: "Indra Ghaniy Kusuma",
    roles: "Kandidat Magang QA / Software Testing, AI Web Developer",
    lead: "Lulusan S-1 Teknik Informatika Universitas Telkom Purwokerto yang tertarik pada software testing dan pengembangan aplikasi berbasis AI.",
    about:
      "Saya tertarik memulai karier di bidang QA dan software testing. Saat kerja praktik di PT Ravelware Technology Indonesia, saya ikut mengembangkan aplikasi analisis sentimen berita menggunakan LLaMA3 dan Ollama, dengan FastAPI, React, dan MySQL. Saya juga menguji endpoint melalui Swagger UI dan memeriksa respons aplikasi. Saat ini saya sedang memperdalam penyusunan test case dan dasar test automation dengan Katalon Studio.",
    email: "indraghaniy43@gmail.com",
    linkedin: "https://linkedin.com/in/indraghaniykusuma",
    wa: "628967384004",
    location: "Banjarnegara, Jawa Tengah",
    cv: "CV_INDRA_GHANIY_KUSUMA.pdf",
  },
  stats: [
    { n: "3.81", label: "IPK / 4.00", suf: "" },
    { n: "5630", label: "Tweet penelitian", suf: "" },
    { n: "87.84", label: "Akurasi ELM (80:20)", suf: "%" },
    { n: "MTCNA", label: "Bersertifikat", suf: "" },
  ],
  education: [
    {
      role: "Sarjana Komputer (S-1) Teknik Informatika",
      org: "Universitas Telkom Purwokerto",
      period: "2022 - 2026",
      desc: "IPK 3.81 / 4.00 (Cum Laude)\nMata kuliah relevan: Penjaminan Mutu Perangkat Lunak, Rekayasa Perangkat Lunak, Basis Data Relasional, Struktur Data & Algoritma, Jaringan Komputer, PBO.",
    },
  ],
  skills: [
    {
      cat: "QA & Testing",
      items:
        "Dasar Katalon Studio, Penyusunan Test Case, Pengujian API dengan Swagger UI, Validasi Output",
    },
    {
      cat: "AI & Data",
      items:
        "Python, LLaMA3, Ollama, Prompt Engineering, Analisis Sentimen, Matplotlib",
    },
    {
      cat: "Web & Database",
      items:
        "FastAPI, ReactJS, Tailwind CSS, HTML, CSS, JavaScript, MySQL, REST API, Swagger UI",
    },
    {
      cat: "Tools & Network",
      items: "VS Code, Microsoft Office, Canva, MikroTik, IP Address, VPN",
    },
    {
      cat: "Soft Skills",
      items: "Komunikasi, Kerja Tim, Kepemimpinan, Problem Solving, Adaptasi",
    },
  ],
  experience: [
    {
      role: "AI Web Developer Intern (Kerja Praktik)",
      org: "PT Ravelware Technology Indonesia",
      period: "Juli 2025 - September 2025",
      desc: "Mengembangkan aplikasi web analisis sentimen berita berbasis LLaMA3 melalui Ollama (positif, negatif, netral).\nMembangun backend FastAPI: ambil data NewsData.io, kirim prompt ke model, validasi output JSON, simpan ke MySQL.\nMembuat dashboard ReactJS + Tailwind CSS: daftar berita, detail, filter, visualisasi distribusi sentimen.\nMenguji endpoint REST API via Swagger UI dan mengevaluasi konsistensi hasil analisis berita berbahasa Indonesia.",
    },
    {
      role: "Admin Web & Editing Foto",
      org: "Permata Wisata Tour and Travel",
      period: "Februari 2020 - Mei 2020",
      desc: "Mengelola dan memperbarui konten website serta informasi paket tour.\nMembantu administrasi bisnis dan customer service.",
    },
  ],
  projects: [
    {
      title: "Aplikasi Web Analisis Sentimen Berita Berbasis LLaMA 3",
      tech: "LLaMA 3, Ollama, FastAPI, React, Tailwind CSS, MySQL, NewsData.io",
      desc: "Mengembangkan aplikasi untuk mengelompokkan berita berbahasa Indonesia ke sentimen positif, negatif, dan netral.\nMembangun backend FastAPI yang mengambil berita dari NewsData.io berdasarkan kata kunci, mengirim prompt ke LLaMA 3 yang dijalankan lokal melalui Ollama, memvalidasi keluaran JSON, lalu menyimpan hasilnya ke MySQL.\nMembuat dashboard React dan Tailwind CSS untuk melihat daftar, detail, filter berita, dan distribusi sentimen.\nMenguji endpoint melalui Swagger UI dan memeriksa respons serta konsistensi hasil analisis.",
      images: [
        "assets/projects/magang-dashboard.png",
        "assets/projects/magang-hasil-analisis.png",
        "assets/projects/magang-swagger-api.png",
      ],
      link: "",
    },
    {
      title: "Analisis Sentimen Mobil Listrik dan Hybrid di Platform X",
      tech:
        "Python, TF-IDF, Truncated SVD, InSet Lexicon, Naive Bayes, ELM, Weighted Soft Voting",
      desc: "Untuk tugas akhir, mengolah 5.630 tweet berbahasa Indonesia dari periode 2021–2025. Tahap pengolahan mencakup pembersihan teks, normalisasi, tokenisasi, penanganan negasi, penghapusan stopword, dan stemming.\nMemberi label sentimen menggunakan InSet Lexicon dengan ambang berbasis IQR, kemudian membandingkan Naive Bayes, ELM, dan Hybrid ELM–Naive Bayes.\nPada pembagian data 80:20, ELM memperoleh akurasi 87,84% dan F1-score 87,85%. Model hybrid memperoleh akurasi terbaik 85,62% pada pembagian 90:10.",
      images: [
        "assets/projects/ta-distribusi-sentimen.png",
        "assets/projects/ta-confusion-matrix-elm.png",
      ],
      link: "",
    },
    {
      title: "Analisis Emisi Karbon di Daerah Jakarta",
      tech: "Machine Learning, Analisis Data, Visualisasi",
      desc: "Membandingkan beberapa algoritma machine learning untuk melihat pola emisi karbon dan menjelaskan hasil lewat visualisasi data.",
      link: "",
    },
    {
      title: "DolanKuy - Aplikasi Pemesanan Tiket Wisata Purwokerto",
      tech: "Rekayasa Perangkat Lunak, Perancangan Aplikasi",
      desc: "Merancang konsep aplikasi pemesanan tiket wisata dengan fokus alur pengguna, kebutuhan fitur, dan kemudahan akses informasi destinasi.",
      link: "",
    },
  ],
  org: [
    {
      role: "Staff Kementerian Luar Negeri",
      org: "Badan Eksekutif Mahasiswa",
      period: "Januari 2024 - Januari 2025",
      desc: "Penghubung komunikasi pihak eksternal dan internal kampus untuk kerja sama dan studi banding.\nMendukung perencanaan dan pelaksanaan program kerja kementerian.",
    },
    {
      role: "Staff Divisi Keamanan",
      org: "Malam Seni Informatika",
      period: "November 2023 - Januari 2024",
      desc: "Menjaga ketertiban acara dan alur kegiatan sesuai rundown (500+ peserta).\nBerkoordinasi dengan tim sejak persiapan hingga penutupan.",
    },
  ],
  certs: [
    { title: "MikroTik Certified Network Associate (MTCNA)", period: "2020" },
    {
      title: "EPrT (English Proficiency Test) - Skor 423",
      period: "2024 - 2026",
    },
    { title: "Sertifikat BEM: Kementerian Luar Negeri", period: "2024 - 2025" },
  ],
};

// ====== KONFIGURASI FORM & TAMPILAN PER SECTION ======
const exp = [
  ["role", "Posisi"],
  ["org", "Perusahaan / Organisasi"],
  ["period", "Periode"],
  ["desc", "Deskripsi (1 poin per baris)", "ta"],
];
const FIELDS = {
  skills: [
    ["cat", "Kategori"],
    ["items", "Skill (pisahkan dengan koma)"],
  ],
  experience: exp,
  org: exp,
  projects: [
    ["title", "Judul Proyek"],
    ["tech", "Teknologi"],
    ["desc", "Deskripsi (1 poin per baris)", "ta"],
    ["images", "Gambar proyek (satu path per baris, opsional)", "ta"],
    ["link", "Link GitHub/Demo (opsional, diawali https://)"],
  ],
  certs: [
    ["title", "Nama Sertifikat"],
    ["period", "Tahun"],
  ],
  education: exp,
  stats: [
    [
      "n",
      "Nilai (angka tanpa titik ribuan, mis. 3.81 atau 5630; boleh teks, mis. MTCNA)",
    ],
    ["label", "Keterangan"],
    ["suf", "Akhiran (opsional, mis. %)"],
  ],
  profile: [
    ["name", "Nama Lengkap"],
    ["roles", "Peran (pisahkan koma, tampil sebagai efek mengetik)"],
    ["lead", "Kalimat singkat di bagian atas", "ta"],
    ["about", "Tentang Saya", "ta"],
    ["email", "Email"],
    ["linkedin", "Link LinkedIn (diawali https://)"],
    ["wa", "Nomor WhatsApp (format 628xxx)"],
    ["location", "Lokasi"],
    ["cv", "Nama file CV (mis. CV_NAMA.pdf)"],
  ],
};
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const li = (t) =>
  String(t || "")
    .split("\n")
    .filter((x) => x.trim())
    .map((x) => `<li>${esc(x)}</li>`)
    .join("");
const jobCard = (i) =>
  `<h3>${esc(i.role)}</h3><p class="sub">${esc(i.org)} · ${esc(i.period)}</p><ul>${li(i.desc)}</ul>`;
const projectImageCaptions = {
  "assets/projects/magang-dashboard.png": "Dashboard dan pencarian berita",
  "assets/projects/magang-hasil-analisis.png": "Detail berita dan hasil analisis sentimen",
  "assets/projects/magang-swagger-api.png": "Dokumentasi endpoint API di Swagger UI",
  "assets/projects/ta-distribusi-sentimen.png": "Distribusi sentimen kendaraan listrik dan hybrid",
  "assets/projects/ta-confusion-matrix-elm.png": "Confusion matrix model ELM pada split 80:20",
};
const projectImages = (i) =>
  (Array.isArray(i.images) ? i.images : []).filter(
    (src) =>
      typeof src === "string" &&
      /^assets\/projects\/[\w./-]+\.(?:png|jpe?g|webp)$/i.test(src) &&
      !src.split("/").includes(".."),
  );
const PROJECT_SLIDE_DELAY = 5000;
const projectSlideTimers = new WeakMap();
let projectSlideObserver;
const updateProjectSlide = (card, index) => {
  const project = data.projects[card.dataset.projectIndex];
  const images = projectImages(project || {});
  if (images.length < 2) return;
  const next = (index + images.length) % images.length;
  const src = images[next];
  const caption = projectImageCaptions[src] || "Tampilan proyek";
  const image = card.querySelector("[data-preview-image]");
  image.dataset.src = src;
  image.dataset.imageIndex = String(next);
  image.dataset.caption = caption;
  image.setAttribute("aria-label", `Perbesar gambar: ${caption}`);
  image.querySelector("img").src = src;
  image.querySelector("img").alt = caption;
  const figure = image.closest(".project-preview");
  figure.querySelector("figcaption").textContent = caption;
  figure.querySelector(".project-preview__controls span").textContent =
    `${next + 1} / ${images.length}`;
};
const stopProjectSlide = (card) => {
  clearInterval(projectSlideTimers.get(card));
  projectSlideTimers.delete(card);
};
const startProjectSlide = (card) => {
  const image = card.querySelector("[data-preview-image]");
  if (
    !image ||
    projectImages(data.projects[card.dataset.projectIndex] || {}).length < 2 ||
    card.dataset.slidePaused === "true" ||
    card.matches(":hover, :focus-within") ||
    document.hidden ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  stopProjectSlide(card);
  projectSlideTimers.set(
    card,
    setInterval(
      () => updateProjectSlide(card, Number(image.dataset.imageIndex) + 1),
      PROJECT_SLIDE_DELAY,
    ),
  );
};
function initProjectSlides() {
  projectSlideObserver?.disconnect();
  projectSlideObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach(({ target, isIntersecting }) =>
        isIntersecting ? startProjectSlide(target) : stopProjectSlide(target),
      ),
    { threshold: 0.25 },
  );
  document.querySelectorAll("#projects-list [data-project-index]").forEach((card) => {
    projectSlideObserver.observe(card);
    card.addEventListener("mouseenter", () => stopProjectSlide(card));
    card.addEventListener("mouseleave", () => startProjectSlide(card));
    card.addEventListener("focusin", () => stopProjectSlide(card));
    card.addEventListener("focusout", () => startProjectSlide(card));
  });
}
document.addEventListener("visibilitychange", () => {
  document.querySelectorAll("#projects-list [data-project-index]").forEach((card) =>
    document.hidden ? stopProjectSlide(card) : startProjectSlide(card),
  );
});
window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change", () => {
  document.querySelectorAll("#projects-list [data-project-index]").forEach((card) =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? stopProjectSlide(card)
      : startProjectSlide(card),
  );
});
const projectCard = (i) => {
  const images = projectImages(i);
  const description = String(i.desc || "")
    .split("\n")
    .map((text) => text.trim())
    .filter(Boolean);
  const preview = images.length
    ? `<figure class="project-preview">
        <button
          class="project-preview__image"
          type="button"
          data-preview-image
          data-src="${esc(images[0])}"
          data-image-index="0"
          data-caption="${esc(projectImageCaptions[images[0]] || i.title)}"
          aria-label="Perbesar gambar: ${esc(projectImageCaptions[images[0]] || i.title)}"
        >
          <img
            src="${esc(images[0])}"
            alt="${esc(projectImageCaptions[images[0]] || i.title)}"
            loading="lazy"
          >
          <span aria-hidden="true">Perbesar ↗</span>
        </button>
        ${
          images.length > 1
            ? `<div class="project-preview__controls" role="group" aria-label="Kontrol galeri proyek">
                <button type="button" data-gallery-step="-1" aria-label="Gambar sebelumnya">←</button>
                <span aria-live="off">1 / ${images.length}</span>
                <button type="button" data-gallery-step="1" aria-label="Gambar berikutnya">→</button>
                <button
                  type="button"
                  data-gallery-pause
                  aria-label="Jeda slideshow"
                  aria-pressed="false"
                  title="Jeda slideshow"
                >Ⅱ</button>
              </div>`
            : ""
        }
        <figcaption>${esc(projectImageCaptions[images[0]] || "Tampilan proyek")}</figcaption>
      </figure>`
    : "";
  const link = /^https?:\/\//.test(i.link || "")
    ? `<a class="link" href="${esc(i.link)}" target="_blank" rel="noopener">Lihat proyek →</a>`
    : "";
  return `${preview}
    <h3>${esc(i.title)}</h3>
    <p class="sub project-tech">${esc(i.tech)}</p>
    <p class="project-summary">${esc(description[0] || "Ringkasan proyek belum ditambahkan.")}</p>
    <details class="project-details">
      <summary>Lihat detail dan hasil</summary>
      <div class="project-details__content">
        <p class="project-tech-full"><strong>Teknologi:</strong> ${esc(i.tech)}</p>
        <ul>${li(description.join("\n"))}</ul>
        ${link}
      </div>
    </details>`;
};
const VIEW = {
  skills: (i) =>
    `<h3>${esc(i.cat)}</h3><div class="chips">${String(i.items || "")
      .split(",")
      .filter((s) => s.trim())
      .map((s) => `<span>${esc(s.trim())}</span>`)
      .join("")}</div>`,
  experience: jobCard,
  org: jobCard,
  projects: projectCard,
  certs: (i) => `<h3>${esc(i.title)}</h3><p class="sub">${esc(i.period)}</p>`,
  education: jobCard,
  stats: (i) => {
    const raw = String(i.n ?? "").replace(",", "."),
      num = /^\d+(\.\d+)?$/.test(raw);
    return `<b ${num ? `data-n="${esc(raw)}" data-d="${(raw.split(".")[1] || "").length}" data-s="${esc(i.suf || "")}"` : ""}>${num ? "0" : esc(i.n)}</b><small>${esc(i.label)}</small>`;
  },
};

// ====== STATE & PENYIMPANAN (localStorage) ======
const KEY = "portfolio-igk-v1";
const $ = (s) => document.querySelector(s);
let data,
  admin = new URLSearchParams(location.search).get("mode") === "edit";
try {
  data = JSON.parse(localStorage.getItem(KEY));
} catch {
  data = null;
}
data = Object.assign(structuredClone(DEFAULT), data || {});
const save = () => {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    alert("Gagal menyimpan ke browser.");
  }
};

function render() {
  for (const k in VIEW) {
    $("#" + k + "-list").innerHTML =
      (data[k] || [])
        .map(
          (it, i) =>
            `<article class="card" ${k === "projects" ? `data-project-index="${i}"` : ""}>${VIEW[k](it)}<div class="adm"><button data-a="edit" data-k="${k}" data-i="${i}">Edit</button><button data-a="del" data-k="${k}" data-i="${i}">Hapus</button></div></article>`,
        )
        .join("") || '<p class="muted">Belum ada data.</p>';
  }
  document.body.classList.toggle("admin", admin);
  initProjectSlides();
}

// ====== FORM TAMBAH / EDIT ======
function openForm(k, i) {
  const v = k === "profile" ? data.profile : i == null ? {} : data[k][i];
  $("#frm").innerHTML =
    `<h3>${k === "profile" ? "Edit Profil" : i == null ? "Tambah data" : "Edit data"}</h3>` +
    FIELDS[k]
      .map(
        ([n, l, t]) => {
          const value = Array.isArray(v[n]) ? v[n].join("\n") : v[n];
          return `<label>${l}${t ? `<textarea name="${n}">${esc(value)}</textarea>` : `<input name="${n}" value="${esc(value)}">`}</label>`;
        },
      )
      .join("") +
    `<div class="row"><button type="button" class="btn ghost" id="cancel">Batal</button><button class="btn">Simpan</button></div>`;
  $("#cancel").onclick = () => $("#dlg").close();
  $("#frm").onsubmit = (e) => {
    e.preventDefault();
    const obj = Object.fromEntries(new FormData(e.target));
    if (k === "projects")
      obj.images = String(obj.images || "")
        .split("\n")
        .map((src) => src.trim())
        .filter(Boolean);
    k === "profile"
      ? (data.profile = obj)
      : i == null
        ? data[k].push(obj)
        : (data[k][i] = obj);
    save();
    render();
    $("#dlg").close();
  };
  $("#dlg").showModal();
}

document.addEventListener("click", (e) => {
  const step = e.target.closest("[data-gallery-step]");
  if (step) {
    const card = step.closest(".card");
    const project = data.projects[card.dataset.projectIndex];
    const images = projectImages(project || {});
    const image = card.querySelector("[data-preview-image]");
    updateProjectSlide(
      card,
      Number(image.dataset.imageIndex) + Number(step.dataset.galleryStep),
    );
    if (card.dataset.slidePaused !== "true") startProjectSlide(card);
    return;
  }
  const pause = e.target.closest("[data-gallery-pause]");
  if (pause) {
    const card = pause.closest(".card");
    const paused = card.dataset.slidePaused !== "true";
    card.dataset.slidePaused = String(paused);
    pause.setAttribute("aria-pressed", String(paused));
    pause.setAttribute(
      "aria-label",
      paused ? "Lanjutkan slideshow" : "Jeda slideshow",
    );
    pause.textContent = paused ? "▶" : "Ⅱ";
    paused ? stopProjectSlide(card) : startProjectSlide(card);
    return;
  }
  const preview = e.target.closest("[data-preview-image]");
  if (preview) {
    $("#imagePreview").showModal();
    $("#imagePreviewImg").src = preview.dataset.src;
    $("#imagePreviewImg").alt = preview.dataset.caption;
    $("#imagePreviewCaption").textContent = preview.dataset.caption;
    return;
  }
  const b = e.target.closest("[data-a]");
  if (!b) return;
  const { a, k, i } = b.dataset;
  if (a === "add") openForm(k);
  if (a === "edit") openForm(k, +i);
  if (a === "del" && confirm("Hapus data ini?")) {
    data[k].splice(+i, 1);
    save();
    render();
  }
  if (a === "reset" && confirm("Kembalikan semua data ke bawaan?")) {
    data = structuredClone(DEFAULT);
    save();
    render();
  }
  if (a === "export") {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }),
    );
    Object.assign(document.createElement("a"), {
      href: url,
      download: "portfolio-data.json",
    }).click();
    URL.revokeObjectURL(url);
  }
  if (a === "import") $("#file").click();
});

$("#file").onchange = async (e) => {
  try {
    const j = JSON.parse(await e.target.files[0].text());
    for (const k in VIEW)
      if (j[k] !== undefined && !Array.isArray(j[k])) throw 0;
    data = Object.assign(structuredClone(DEFAULT), j);
    save();
    render();
  } catch {
    alert("File JSON tidak valid.");
  }
  e.target.value = "";
};

$("#yr").textContent = new Date().getFullYear();

const menuToggle = $("#menuToggle");
const siteNav = $("#siteNav");
const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Buka navigasi");
  siteNav.classList.remove("open");
};
menuToggle.onclick = () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Tutup navigasi" : "Buka navigasi");
  siteNav.classList.toggle("open", open);
};
siteNav.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Animasi muncul saat scroll
const io = new IntersectionObserver(
  (es) => es.forEach((x) => x.isIntersecting && x.target.classList.add("in")),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

render();

// ====== FITUR INTERAKTIF ======
// Pencarian proyek (tetap berlaku setelah tambah/edit)
const applyQ = () => {
  const q = $("#q").value.toLowerCase();
  document
    .querySelectorAll("#projects-list .card")
    .forEach(
      (c) =>
        (c.style.display = c.textContent.toLowerCase().includes(q)
          ? ""
          : "none"),
    );
};
const _render = render;
render = function () {
  _render();
  applyQ();
};
$("#q").oninput = applyQ;

// Tema terang/gelap (tersimpan)
const setTheme = (t) => {
  document.documentElement.dataset.theme = t;
  $("#theme").textContent = t === "light" ? "☀️" : "🌙";
  try {
    localStorage.setItem("theme", t);
  } catch {}
};
setTheme(
  (() => {
    try {
      return localStorage.getItem("theme");
    } catch {}
  })() || "dark",
);
$("#theme").onclick = () =>
  setTheme(
    document.documentElement.dataset.theme === "light" ? "dark" : "light",
  );

// Efek mengetik
const words = ["Kandidat Magang QA / Software Testing", "AI Web Developer"];
let w = 0,
  c = 0,
  del = false;
(function type() {
  const t = words[w];
  c += del ? -1 : 1;
  $("#typed").textContent = t.slice(0, c);
  let d = del ? 40 : 90;
  if (!del && c === t.length) {
    del = true;
    d = 1400;
  } else if (del && c === 0) {
    del = false;
    w = (w + 1) % words.length;
    d = 300;
  }
  setTimeout(type, d);
})();

// Hitung angka statistik saat terlihat
const co = new IntersectionObserver(
  (es) =>
    es.forEach((x) => {
      if (!x.isIntersecting) return;
      co.unobserve(x.target);
      const el = x.target,
        n = +el.dataset.n,
        dc = +el.dataset.d,
        s = el.dataset.s || "",
        t0 = performance.now();
      (function f(t) {
        const p = Math.min((t - t0) / 1400, 1);
        el.textContent =
          (n * p).toLocaleString("id-ID", {
            minimumFractionDigits: dc,
            maximumFractionDigits: dc,
          }) + s;
        p < 1 && requestAnimationFrame(f);
      })(t0);
    }),
  { threshold: 0.6 },
);
document.querySelectorAll("[data-n]").forEach((el) => co.observe(el));

// Progress scroll, tombol ke atas, menu aktif
const secs = [...document.querySelectorAll("main section[id]")],
  links = [...document.querySelectorAll(".nav nav a")];
addEventListener(
  "scroll",
  () => {
    const h = document.documentElement,
      y = h.scrollTop;
    $("#bar").style.width = (y / (h.scrollHeight - h.clientHeight)) * 100 + "%";
    $("#top").classList.toggle("show", y > 500);
    const cur = secs.filter((s) => s.offsetTop - 120 <= y).pop();
    links.forEach((a) =>
      a.classList.toggle("on", cur && a.getAttribute("href") === "#" + cur.id),
    );
  },
  { passive: true },
);
$("#top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

// Cahaya kursor + efek miring pada kartu
addEventListener("mousemove", (e) => {
  $("#glow").style.left = e.clientX + "px";
  $("#glow").style.top = e.clientY + "px";
  const card = e.target.closest(".card");
  if (card && !admin) {
    const r = card.getBoundingClientRect(),
      x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(700px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  }
});
document.addEventListener("mouseout", (e) => {
  const c = e.target.closest(".card");
  if (c) c.style.transform = "";
});

// Form kontak -> membuka aplikasi email
$("#cf").onsubmit = (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(e.target));
  location.href = `mailto:${data.profile.email}?subject=${encodeURIComponent("Pesan dari " + f.nama)}&body=${encodeURIComponent(f.pesan + "\n\nEmail: " + f.email)}`;
};

// Asisten tanya-jawab (jawaban mengikuti data portofolio terbaru)
const list = (a) => a.map((x) => "• " + x).join("\n");
const QA = {
  "Keahlian utama?": () => list(data.skills.map((s) => `${s.cat}: ${s.items}`)),
  "Pengalaman terbaru?": () => {
    const x = data.experience[0];
    return x ? `${x.role} di ${x.org} (${x.period})` : "Belum ada data.";
  },
  "Proyek unggulan?": () => list(data.projects.map((p) => p.title)),
  "Sertifikasi?": () => list(data.certs.map((c) => `${c.title} (${c.period})`)),
  "Cara menghubungi?": () =>
    `Email: ${data.profile.email}\nLinkedIn: ${data.profile.linkedin}\nAtau gunakan form di bagian Kontak.`,
};
const say = (t, who) => {
  const d = Object.assign(document.createElement("div"), {
    className: "m " + who,
    textContent: t,
  });
  $("#msgs").append(d);
  $("#msgs").scrollTop = 1e6;
};
$("#qs").innerHTML = Object.keys(QA)
  .map((q) => `<button>${q}</button>`)
  .join("");
$("#qs").onclick = (e) => {
  const q = e.target.textContent;
  if (e.target.tagName !== "BUTTON") return;
  say(q, "me");
  setTimeout(() => say(QA[q](), "bot"), 350);
};
$("#chatBtn").onclick = () => {
  $("#chat").classList.toggle("open");
  if (!$("#msgs").children.length)
    say(
      "Halo! 👋 Pilih pertanyaan di bawah untuk mengenal Indra lebih cepat.",
      "bot",
    );
};
$("#chatX").onclick = () => $("#chat").classList.remove("open");

// ====== PROFIL EDITABLE ======
function renderProfile() {
  const p = data.profile,
    $t = (id, v) => ($(id).textContent = v || "");
  $t("#nm", p.name);
  $t("#f-nm", p.name);
  $t("#f-loc", p.location);
  $t("#lead", p.lead);
  $t("#about-t", p.about);
  const roles = String(p.roles || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
  document.title = `${p.name} | ${roles[0] || "Portofolio"}`;
  $t(
    "#ini",
    String(p.name || "")
      .split(" ")
      .filter(Boolean)
      .map((x) => x[0])
      .join("")
      .slice(0, 3)
      .toUpperCase(),
  );
  const ph = $("#photo");
  ph.src = data.photo || "foto.jpg";
  ph.style.display = "";
  words.splice(0, words.length, ...(roles.length ? roles : ["Developer"]));
  w = 0;
  $("#c-mail").href = "mailto:" + (p.email || "");
  $t("#c-mail", p.email);
  $("#c-in").href = /^https?:\/\//.test(p.linkedin || "") ? p.linkedin : "#";
  $("#c-wa").href = "https://wa.me/" + String(p.wa || "").replace(/\D/g, "");
  $("#cvl").href = p.cv || "#";
  document.querySelectorAll("[data-n]").forEach((el) => co.observe(el));
}
const _render2 = render;
render = function () {
  _render2();
  renderProfile();
};

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-a=profile]")) openForm("profile");
  if (admin && e.target.closest("#avatar")) $("#pf").click();
});
$("#pf").onchange = (e) => {
  const f = e.target.files[0];
  if (!f) return;
  const img = new Image();
  img.onload = () => {
    const s = Math.min(img.width, img.height),
      cv = document.createElement("canvas");
    cv.width = cv.height = 480;
    cv.getContext("2d").drawImage(
      img,
      (img.width - s) / 2,
      (img.height - s) / 2,
      s,
      s,
      0,
      0,
      480,
      480,
    );
    data.photo = cv.toDataURL("image/jpeg", 0.85);
    save();
    render();
    URL.revokeObjectURL(img.src);
  };
  img.onerror = () => alert("File bukan gambar.");
  img.src = URL.createObjectURL(f);
  e.target.value = "";
};
render();
