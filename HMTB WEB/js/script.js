/* ============================================================
   HMTB UDINUS — js/script.js  (VERSI FINAL)
   ============================================================
   PANDUAN EDIT:
   - Semua data yang perlu kamu ubah ada di bagian "DATA" di bawah.
   - Cari komentar "EDIT BAGIAN INI" lalu ganti isinya.
   - Foto cukup disimpan di folder assets/ dengan nama file
     yang sesuai — tidak perlu mengubah kode lainnya.
============================================================ */


/* ------------------------------------------------------------
   FUNGSI PLACEHOLDER OTOMATIS (JANGAN DIUBAH)
   Dipanggil otomatis kalau file gambar belum ada,
   jadi website tidak pernah menampilkan gambar rusak.
------------------------------------------------------------ */
function imgFallback(img){
  if (img.dataset.fb) return;
  img.dataset.fb = "1";
  const label = img.dataset.ph || (img.getAttribute("src") || "").split("/").pop() || "foto";
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>" +
    "<rect width='800' height='600' fill='#0B1B2B'/>" +
    "<rect x='12' y='12' width='776' height='576' rx='28' fill='none' stroke='#1D405A' stroke-width='3' stroke-dasharray='16 10'/>" +
    "<circle cx='400' cy='250' r='50' fill='none' stroke='#00B8D4' stroke-width='5'/>" +
    "<path d='M350 250 h28 l12 -30 16 60 14 -30 h32' fill='none' stroke='#00B8D4' stroke-width='6' stroke-linecap='round' stroke-linejoin='round'/>" +
    "<text x='400' y='378' text-anchor='middle' font-family='monospace' font-size='26' fill='#AAB7C4'>" + label + "</text>" +
    "</svg>";
  img.src = "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}


/* ============================================================
   DATA WEBSITE — SEMUA YANG PERLU DIEDIT ADA DI SINI
============================================================ */

// EDIT BAGIAN INI — DATA PENGURUS STRUKTUR ORGANISASI
// Ganti "nama" dengan nama asli. Foto disimpan di assets/pengurus/
// dengan nama file sesuai "foto" di bawah (ketua.jpg, wakil.jpg, dst).
const pengurus = {
  ketua: {
    jabatan: "Ketua Umum",
    nama: "Annisa Larassati",
    foto: "assets/pengurus/ketua.jpg"
  },
  wakil: {
    jabatan: "Wakil ketua",
    nama: "Falih Aqil Izaputra ",
    foto: "assets/pengurus/wakil.jpg"
  },
  sekretaris: {
    jabatan: "Sekretaris",
    nama: "Brinda Amalia Lutfiana",
    foto: "assets/pengurus/sekretaris.jpg"
  },
  bendahara: {
    jabatan: "Bendahara",
    nama: "Gadis Laeli",
    foto: "assets/pengurus/bendahara.jpg"
  },
  divisi: [
    { jabatan: "KADIV Eksternal", nama: "Muhammad Nur Rahman",            foto: "assets/pengurus/eksternal.jpg" },
    { jabatan: "KADIV PSDM",      nama: "Mar'atus Sa'adah Fitriani",      foto: "assets/pengurus/psdm.jpg" },
    { jabatan: "KADIV KWU",       nama: "Desi Natalia Diah Lestari",      foto: "assets/pengurus/kwu.jpg" },
    { jabatan: "KADIV MEDKREF",   nama: "Mohammad Fadri Saad Al Kholili", foto: "assets/pengurus/medkref.jpg" }
  ]
};

// EDIT BAGIAN INI — DATA PROGRAM KERJA
// "image" bersifat opsional: isi lokasi foto jika ada (contoh: "assets/images/program-1.jpg"),
// kosongkan ("") jika belum ada — modal akan tampil tanpa foto.
const programs = [
  {
    title: "Go To School",
    description: "Kegiatan pengenalan Teknik Biomedis dan teknologi kesehatan kepada siswa SMA/SMK sekaligus memperkenalkan bidang dan peluang di dunia biomedis.",
    image: ""
  },
  {
    title: "Dinusfest",
    description: "Kegiatan kompetisi dan pengembangan kreativitas mahasiswa yang menggabungkan kemampuan teknologi, inovasi, dan problem solving dalam bidang Teknik Biomedis.",
    image: ""
  },
  {
    title: "Minibootcamp",
    description: "Program pembelajaran praktis yang memberikan kesempatan peserta untuk mengenal dan mencoba teknologi serta perangkat yang berkaitan dengan bidang Teknik Biomedis.",
    image: ""
  },
  {
    title: "Seminar Nasional",
    description: "Kegiatan diskusi dan edukasi yang menghadirkan pembicara untuk membahas perkembangan teknologi, inovasi, dan isu di bidang kesehatan serta Teknik Biomedis.",
    image: ""
  }
];

// EDIT BAGIAN INI — FOTO GALERI KEGIATAN
// Tambahkan item baru cukup dengan menyalin satu baris { ... } ke bawahnya.
const kegiatan = [
  { judul: "Dokumentasi Kegiatan 1", tanggal: "", foto: "assets/images/kegiatan-1.jpg", alt: "Kegiatan HMTB UDINUS 1" },
  { judul: "Dokumentasi Kegiatan 2", tanggal: "", foto: "assets/images/kegiatan-2.jpg", alt: "Kegiatan HMTB UDINUS 2" },
  { judul: "Dokumentasi Kegiatan 3", tanggal: "", foto: "assets/images/kegiatan-3.jpg", alt: "Kegiatan HMTB UDINUS 3" }
];

// EDIT BAGIAN INI — MEDIA SOSIAL & KONTAK
// Catatan link WhatsApp: format https://wa.me/ diikuti nomor tanpa "0" di depan.
// Contoh: 0895-1234-5678  ->  https://wa.me/6289512345678
const mediaSosial = [
  {
    nama: "Instagram",
    handle: "@hmtb_udinus",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/hmtbudinus?stkn=ZDR4MXpid2llamtx"
  },
  {
    nama: "TikTok",
    handle: "@hmteknikbiomedis",
    icon: "fa-brands fa-tiktok",
    link: "https://www.tiktok.com/@hmteknikbiomedis?_r=1&_t=ZS-99poEVtSUUc"
  },
  {
    nama: "WhatsApp",
    handle: "Fadri",
    icon: "fa-brands fa-whatsapp",
    link: "https://wa.me/+6285136527265"
  },
  {
    nama: "Media Partner",
    handle: "Fadri",
    icon: "fa-solid fa-handshake",
    link: "https://wa.me/+6285136527265"
  }
];

/* ============================================================
   BAGIAN OTOMATIS — TIDAK PERLU DIUBAH
============================================================ */

// ---------- Render galeri kegiatan ----------
function renderGallery(){
  const wrap = document.getElementById("galleryGrid");
  wrap.innerHTML = kegiatan.map((k, i) => `
    <figure class="gallery-item reveal" style="--rd:${(Math.min(i,4) * 0.08).toFixed(2)}s">
      <img src="${k.foto}" alt="${k.alt || k.judul}" data-ph="${k.judul}" loading="lazy" onerror="imgFallback(this)">
      <figcaption>
        <span class="g-title">${k.judul}</span>
        ${k.tanggal ? `<span class="g-date">${k.tanggal}</span>` : ""}
      </figcaption>
    </figure>
  `).join("");
}

// ---------- Render program kerja ----------
function renderPrograms(){
  const list = document.getElementById("programList");
  list.innerHTML = programs.map((p, i) => `
    <article class="program-card reveal" style="--rd:${(Math.min(i,4) * 0.08).toFixed(2)}s">
      <span class="program-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="program-info">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <button class="program-detail" type="button" data-index="${i}">
          Lihat Detail <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </article>
  `).join("");
}

// ---------- Render struktur organisasi ----------
function kartuPengurus(p, emas){
  return `
    <article class="pengurus-card ${emas ? "gold" : ""}">
      <img src="${p.foto}" alt="Foto ${p.jabatan}" data-ph="${p.jabatan}" loading="lazy" onerror="imgFallback(this)">
      <p class="pengurus-jabatan">${p.jabatan}</p>
      <p class="pengurus-nama">${p.nama}</p>
    </article>`;
}

function garisTegak(){
  return `<div class="org-connector" aria-hidden="true"></div>`;
}

function garisCabang(n){
  let stubs = "";
  for (let i = 1; i <= n; i++){
    stubs += `<span class="stub" style="left:${(100 / n * (i - 0.5)).toFixed(4)}%"></span>`;
  }
  return `
    <div class="org-connector split" aria-hidden="true">
      <span class="drop"></span>
      <span class="bar" style="left:${(50 / n).toFixed(4)}%; right:${(50 / n).toFixed(4)}%"></span>
      ${stubs}
    </div>`;
}

function renderStruktur(){
  const tree = document.getElementById("orgTree");
  const flow = document.getElementById("orgFlow");
  const { ketua, wakil, sekretaris, bendahara, divisi } = pengurus;
  const panah = `<div class="flow-arrow" aria-hidden="true"><i class="fa-solid fa-angles-down"></i></div>`;

  // Bagan desktop
  tree.innerHTML = `
    <div class="org-level center">${kartuPengurus(ketua, true)}</div>
    ${garisTegak()}
    <div class="org-level center">${kartuPengurus(wakil, true)}</div>
    ${garisCabang(2)}
    <div class="org-level cols-2">${kartuPengurus(sekretaris)}${kartuPengurus(bendahara)}</div>
    ${garisCabang(4)}
    <div class="org-level cols-4">${divisi.map(d => kartuPengurus(d)).join("")}</div>
  `;

  // Versi mobile: alur vertikal
  flow.innerHTML = `
    ${kartuPengurus(ketua, true)} ${panah}
    ${kartuPengurus(wakil, true)} ${panah}
    <div class="flow-group">${kartuPengurus(sekretaris)}${kartuPengurus(bendahara)}</div>
    ${panah}
    <p class="flow-label">Divisi</p>
    <div class="flow-group">${divisi.map(d => kartuPengurus(d)).join("")}</div>
  `;
}

// ---------- Render media sosial + ikon footer ----------
function renderSosmed(){
  const grid = document.getElementById("sosmedGrid");
  grid.innerHTML = mediaSosial.map((s, i) => `
    <a class="sosmed-card reveal ${s.nama.toLowerCase().includes("partner") ? "partner" : ""}"
       style="--rd:${(i * 0.07).toFixed(2)}s"
       href="${s.link}" target="_blank" rel="noopener" aria-label="${s.nama} HMTB UDINUS">
      <span class="sosmed-icon"><i class="${s.icon}"></i></span>
      <span class="sosmed-info">
        <span class="sosmed-nama">${s.nama}</span>
        <span class="sosmed-handle">${s.handle}</span>
      </span>
      <i class="fa-solid fa-arrow-up-right-from-square sosmed-arrow" aria-hidden="true"></i>
    </a>
  `).join("");

  const foot = document.getElementById("footerSocial");
  foot.innerHTML = mediaSosial.map(s => `
    <a href="${s.link}" target="_blank" rel="noopener" aria-label="${s.nama} HMTB UDINUS">
      <i class="${s.icon}"></i>
    </a>
  `).join("");
}

// ---------- Navbar: efek scroll, hamburger, scrollspy ----------
function initNavbar(){
  const nav    = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const menu   = document.getElementById("navMenu");
  const links  = menu.querySelectorAll(".nav-link");
  const icon   = toggle.querySelector("i");

  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function tutupMenu(){
    if (!menu.classList.contains("open")) return;
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    icon.className = "fa-solid fa-bars";
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    const buka = !menu.classList.contains("open");
    menu.classList.toggle("open", buka);
    toggle.setAttribute("aria-expanded", String(buka));
    icon.className = buka ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    document.body.style.overflow = buka && window.innerWidth <= 920 ? "hidden" : "";
  });

  // menu otomatis tertutup setelah item dipilih
  links.forEach(l => l.addEventListener("click", tutupMenu));
  window.addEventListener("resize", () => { if (window.innerWidth > 920) tutupMenu(); });

  // scrollspy: menu aktif mengikuti section yang sedang dilihat
  if ("IntersectionObserver" in window){
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting){
          links.forEach(l =>
            l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id)
          );
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("section[id]").forEach(s => spy.observe(s));
  }
}

// ---------- Animasi fade-up saat elemen muncul ----------
function initReveal(){
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)){
    els.forEach(el => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
}

// ---------- Garis ECG hero (digambar otomatis) ----------
function initEcg(){
  const path = document.getElementById("ecgHero");
  if (!path) return;
  const BASE = 80, BEAT = 240, N = 6, W = 1440;
  let d = `M0 ${BASE}`;
  for (let i = 0; i < N; i++){
    const x = i * BEAT;
    d += ` L${x + 40} ${BASE}`
       + ` L${x + 55} ${BASE - 14} L${x + 68} ${BASE - 14} L${x + 80} ${BASE}`
       + ` L${x + 108} ${BASE} L${x + 116} ${BASE + 6}`
       + ` L${x + 128} ${BASE - 58} L${x + 140} ${BASE + 42} L${x + 150} ${BASE}`
       + ` L${x + 178} ${BASE} L${x + 190} ${BASE - 16} L${x + 206} ${BASE - 16} L${x + 218} ${BASE}`;
  }
  d += ` L${W} ${BASE}`;
  path.setAttribute("d", d);
}

// ---------- Modal "Lihat Detail" program kerja ----------
function initModal(){
  const backdrop = document.getElementById("programModal");
  const img      = document.getElementById("modalImg");
  const num      = document.getElementById("modalNum");
  const title    = document.getElementById("modalTitle");
  const desc     = document.getElementById("modalDesc");
  const cta      = document.getElementById("modalCta");
  const closeBtn = document.getElementById("modalClose");
  const note     = document.getElementById("modalNote");
  const ig       = mediaSosial.find(s => s.nama.toLowerCase() === "instagram");

  // catatan Instagram di modal hanya tampil jika data Instagram ada
  if (note) note.hidden = !ig;

  function buka(index){
    const p = programs[index];
    num.textContent   = "PROGRAM " + String(index + 1).padStart(2, "0");
    title.textContent = p.title;
    desc.textContent  = p.description;
    if (p.image){
      img.dataset.fb = "";                 // reset status fallback agar bisa jalan lagi
      img.dataset.ph = "Foto " + p.title;  // label placeholder jika foto belum ada
      img.hidden = false;
      img.src = p.image;
      img.alt = "Foto program " + p.title;
    } else {
      img.hidden = true;
    }
    if (ig){
      cta.href = ig.link;
      cta.textContent = ig.handle;
    }
    backdrop.hidden = false;
    requestAnimationFrame(() => backdrop.classList.add("open"));
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function tutup(){
    backdrop.classList.remove("open");
    const menuOpen = document.getElementById("navMenu").classList.contains("open");
    if (!menuOpen) document.body.style.overflow = "";
    setTimeout(() => { backdrop.hidden = true; }, 250);
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".program-detail");
    if (btn) buka(Number(btn.dataset.index));
  });
  closeBtn.addEventListener("click", tutup);
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) tutup(); });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!backdrop.hidden) tutup();
    const menu = document.getElementById("navMenu");
    if (menu.classList.contains("open")) document.getElementById("navToggle").click();
  });
}

// ---------- Inisialisasi saat halaman siap ----------
document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderPrograms();
  renderStruktur();
  renderSosmed();
  initNavbar();
  initReveal();
  initEcg();
  initModal();
});