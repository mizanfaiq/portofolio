(function () {
  var D = window.PORTOFOLIO || { profil: {}, proyek: [], makalah: [] };
  var p = D.profil || {};

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function okUrl(u) { return /^https?:\/\/[^\s]+$/i.test(String(u || '').trim()); }
  function chips(s) {
    return '<div class="chips">' + String(s || '').split(',').map(function (t) { return t.trim(); })
      .filter(Boolean).map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>';
  }
  function extOf(f) { var m = /\.([a-z0-9]+)$/i.exec(f || ''); return m ? m[1].toLowerCase() : ''; }
  function fileName(f) { return String(f || '').split('/').pop(); }

  document.title = (p.nama ? p.nama + ' | Portofolio' : 'Portofolio');

  var h = '';
  h += '<nav class="top glass" aria-label="Navigasi"><a href="#tentang">Tentang</a><a href="#keahlian">Keahlian</a><a href="#proyek">Proyek</a><a href="#makalah">Makalah</a><a href="#kontak">Kontak</a></nav>';

  h += '<header class="hero glass" id="tentang">' +
    (p.foto ? '<img class="avatar" src="' + esc(p.foto) + '" alt="Foto ' + esc(p.nama) + '" width="112" height="112">' : '') +
    '<span class="label">Profil &amp; portofolio</span><h1>' + esc(p.nama) + '</h1>' +
    '<p class="role">' + esc(p.peran) + (p.bidang ? ' · ' + esc(p.bidang) : '') + '</p>' +
    '<p>' + esc(p.tentang) + '</p>' +
    '<div class="cta"><a class="btn primary" href="#makalah">Lihat makalah</a><a class="btn" href="#kontak">Hubungi saya</a></div></header>';

  h += '<section id="keahlian"><span class="label">Dua pilar keahlian</span><h2>Keahlian</h2><div class="pillars">' +
    '<article class="pillar glass"><h3>Software Development</h3>' + chips(p.keahlianDev) + '</article>' +
    '<article class="pillar glass"><h3>UI/UX Design</h3>' + chips(p.keahlianUx) + '</article></div></section>';

  h += '<section id="proyek"><span class="label">Karya</span><h2>Proyek</h2><div class="projects">';
  if (!(D.proyek || []).length) h += '<div class="empty glass"><h3>Belum ada proyek</h3><p>Proyek akan tampil di sini.</p></div>';
  (D.proyek || []).forEach(function (x) {
    h += '<article class="project glass">' +
      (x.gambar ? '<img class="pimg" src="' + esc(x.gambar) + '" alt="Tampilan proyek ' + esc(x.judul) + '" loading="lazy">' : '') +
      '<h3>' + esc(x.judul) + '</h3><p>' + esc(x.deskripsi) + '</p>' + chips(x.tag) +
      (okUrl(x.link) ? '<div class="cta"><a class="btn small primary" href="' + esc(x.link.trim()) + '" target="_blank" rel="noopener">Buka proyek</a></div>' : '') +
      '</article>';
  });
  h += '</div></section>';

  h += '<section id="makalah"><span class="label">Arsip tulisan</span><h2>Makalah</h2><div class="papers">';
  if (!(D.makalah || []).length) h += '<div class="empty glass"><h3>Belum ada makalah</h3><p>Makalah akan muncul di sini setelah ditambahkan.</p></div>';
  (D.makalah || []).forEach(function (x) {
    var e = extOf(x.file);
    h += '<article class="paper glass"><div class="paper-head"><div class="ext" aria-hidden="true">' + esc(e.toUpperCase()) + '</div>' +
      '<div style="min-width:0"><h3>' + esc(x.judul) + '</h3><div class="meta">' +
      (x.matkul ? '<span>' + esc(x.matkul) + '</span>' : '') + (x.tahun ? '<span>' + esc(x.tahun) + '</span>' : '') +
      (x.ukuran ? '<span>' + esc(x.ukuran) + '</span>' : '') + '</div></div></div>' +
      '<div class="paper-actions">' +
      (e === 'pdf' ? '<a class="btn primary small" href="' + esc(x.file) + '" target="_blank" rel="noopener">Lihat</a>' : '') +
      '<a class="btn small" href="' + esc(x.file) + '" download="' + esc(fileName(x.file)) + '">Unduh</a></div></article>';
  });
  h += '</div></section>';

  h += '<section id="kontak"><span class="label">Terhubung</span><h2>Kontak</h2><div class="contact glass"><dl>' +
    (p.lokasi ? '<div><dt>Lokasi</dt><dd>' + esc(p.lokasi) + '</dd></div>' : '') +
    (p.email ? '<div><dt>Email</dt><dd>' + esc(p.email) + ' <a class="btn small" href="mailto:' + esc(p.email) + '">Kirim email</a> <button class="btn small" type="button" data-copy="' + esc(p.email) + '">Salin</button></dd></div>' : '') +
    (okUrl(p.github) ? '<div><dt>GitHub</dt><dd><a href="' + esc(p.github) + '" target="_blank" rel="noopener">' + esc(p.github) + '</a></dd></div>' : '') +
    (okUrl(p.linkedin) ? '<div><dt>LinkedIn</dt><dd><a href="' + esc(p.linkedin) + '" target="_blank" rel="noopener">' + esc(p.linkedin) + '</a></dd></div>' : '') +
    '</dl></div></section>';

  h += '<footer>© ' + new Date().getFullYear() + ' ' + esc(p.nama) + ' · Portofolio mahasiswa</footer>';
  document.getElementById('app').innerHTML = h;

  function toast(msg) {
    var old = document.querySelector('.toast'); if (old) old.remove();
    var t = document.createElement('div'); t.className = 'toast glass'; t.setAttribute('role', 'status'); t.textContent = msg;
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, 2400);
  }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-copy]'); if (!b) return;
    var v = b.getAttribute('data-copy');
    try { navigator.clipboard.writeText(v).then(function () { toast('Email disalin'); }, function () { toast(v); }); } catch (e) { toast(v); }
  });
})();
