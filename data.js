/* ============================================================
   DATA PORTOFOLIO — edit file ini untuk mengganti isi situs.
   Simpan, lalu unggah ulang ke hosting. Tidak perlu mengubah file lain.
   Tanda koma antar item jangan terlewat, dan teks diapit tanda kutip "".
   ============================================================ */
window.PORTOFOLIO = {
  profil: {
    nama: "Mizanul Faiq",
    peran: "Mahasiswa Informatika",
    bidang: "Pengembangan Perangkat Lunak & Desain UI/UX",
    tentang: "Saya mahasiswa yang suka membangun aplikasi web dan merancang antarmuka yang mudah dipakai. Di halaman ini saya mengumpulkan proyek dan makalah kuliah supaya bisa dibaca dan diunduh siapa saja.",
    foto: "img/profil.jpg",            // ganti file ini dengan fotomu (nama boleh sama)
    lokasi: "Purwokerto, Jawa Tengah",
    email: "mizanulfaiq3@gmail.com",
    github: "",                        // contoh: "https://github.com/namakamu"
    linkedin: "",                      // contoh: "https://linkedin.com/in/namakamu"
    keahlianDev: "HTML, CSS, JavaScript, Python, Git",
    keahlianUx: "Figma, Wireframe, Prototype, Riset pengguna"
  },

  proyek: [
    {
      judul: "Guts'Sea Food",
      deskripsi: "Website untuk usaha seafood Guts'Sea Food, dengan halaman utama, cara pesan, menu, dan kontak.",
      tag: "Web, UI/UX",
      gambar: "img/guts-sea-food.jpg",  // taruh gambar di folder img
      link: ""                          // isi dengan alamat proyek, contoh: "https://..."
    }
  ],

  makalah: [
    // Cara menambah makalah:
    // 1. Taruh file PDF di folder "makalah" (hindari spasi pada nama file).
    // 2. Salin blok di bawah, hapus tanda // di depannya, lalu sesuaikan.
    // {
    //   judul: "Analisis Sistem Informasi Akademik",
    //   matkul: "Rekayasa Perangkat Lunak",
    //   tahun: "2026",
    //   file: "makalah/analisis-sistem-informasi.pdf",
    //   ukuran: "1,2 MB"            // opsional
    // },
  ]
};
