// ====== DATA BAWAAN (diambil dari CV). Edit di sini untuk mengubah isi default ======
const DEFAULT = {
  profile: {
    name: "Indra Ghaniy Kusuma",
    roles:
      "QA Automation Engineer, AI Web Developer, Data Validation Enthusiast",
    lead: "Lulusan S-1 Teknik Informatika Universitas Telkom Purwokerto (Cum Laude) yang fokus pada pengujian perangkat lunak, validasi output, dan pengembangan web berbasis AI.",
    about:
      "Saya memiliki pemahaman fundamental pengujian perangkat lunak: penyusunan test case, pengecekan alur aplikasi, validasi output, pelaporan bug, serta konsep dasar test automation dengan Katalon Studio. Saat kerja praktik di PT Ravelware Technology Indonesia, saya mengembangkan web analisis sentimen berita berbasis LLaMA3 dan Ollama menggunakan FastAPI, ReactJS, Tailwind CSS, dan MySQL, lalu menguji endpoint-nya lewat Swagger UI. Saya siap berkembang di bidang pengujian fungsional, regresi, dan test automation.",
    email: "indraghaniy43@gmail.com",
    linkedin: "https://linkedin.com/in/indraghaniykusuma",
    wa: "628967384004",
    location: "Banjarnegara, Jawa Tengah",
    cv: "CV_INDRA_GHANIY_KUSUMA.pdf",
  },
  stats: [
    { n: "3.81", label: "IPK / 4.00", suf: "" },
    { n: "5630", label: "Tweet dianalisis", suf: "" },
    { n: "87.84", label: "Akurasi model ELM", suf: "%" },
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
      items: "Katalon Studio, Test Case, Bug Reporting, UAT, Test Automation",
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
      title:
        "Hybrid ELM-Naive Bayes: Klasifikasi Sentimen Kendaraan Elektrifikasi",
      tech: "Python, TF-IDF, Naive Bayes, ELM, InSet Lexicon",
      desc: "Mengolah 5.630 tweet Platform X tentang mobil listrik dan hybrid (preprocessing, pelabelan InSet berbasis IQR, TF-IDF).\nMembandingkan Naive Bayes, ELM, dan Hybrid dengan accuracy, precision, recall, F1, confusion matrix, Stratified K-Fold. ELM terbaik: akurasi 87,84% (split 80:20).",
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
const VIEW = {
  skills: (i) =>
    `<h3>${esc(i.cat)}</h3><div class="chips">${String(i.items || "")
      .split(",")
      .filter((s) => s.trim())
      .map((s) => `<span>${esc(s.trim())}</span>`)
      .join("")}</div>`,
  experience: jobCard,
  org: jobCard,
  projects: (i) =>
    `<h3>${esc(i.title)}</h3><p class="sub">${esc(i.tech)}</p><ul>${li(i.desc)}</ul>${/^https?:\/\//.test(i.link || "") ? `<a class="link" href="${esc(i.link)}" target="_blank" rel="noopener">Lihat proyek →</a>` : ""}`,
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
  admin = false;
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
            `<article class="card">${VIEW[k](it)}<div class="adm"><button data-a="edit" data-k="${k}" data-i="${i}">Edit</button><button data-a="del" data-k="${k}" data-i="${i}">Hapus</button></div></article>`,
        )
        .join("") || '<p class="muted">Belum ada data.</p>';
  }
  document.body.classList.toggle("admin", admin);
}

// ====== FORM TAMBAH / EDIT ======
function openForm(k, i) {
  const v = k === "profile" ? data.profile : i == null ? {} : data[k][i];
  $("#frm").innerHTML =
    `<h3>${k === "profile" ? "Edit Profil" : i == null ? "Tambah data" : "Edit data"}</h3>` +
    FIELDS[k]
      .map(
        ([n, l, t]) =>
          `<label>${l}${t ? `<textarea name="${n}">${esc(v[n])}</textarea>` : `<input name="${n}" value="${esc(v[n])}">`}</label>`,
      )
      .join("") +
    `<div class="row"><button type="button" class="btn ghost" id="cancel">Batal</button><button class="btn">Simpan</button></div>`;
  $("#cancel").onclick = () => $("#dlg").close();
  $("#frm").onsubmit = (e) => {
    e.preventDefault();
    const obj = Object.fromEntries(new FormData(e.target));
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

$("#toggleAdmin").onclick = () => {
  admin = !admin;
  $("#toggleAdmin").textContent = admin ? "✔ Selesai" : "✎ Kelola";
  render();
};
$("#yr").textContent = new Date().getFullYear();

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
const words = [
  "QA Automation Engineer",
  "AI Web Developer",
  "Data Validation Enthusiast",
];
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
  ph.style.display = "";
  ph.src = data.photo || "foto.jpg";
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
