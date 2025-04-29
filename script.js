// Menunggu sampai seluruh dokumen HTML dimuat sebelum menjalankan fungsi-fungsi inisialisasi
document.addEventListener('DOMContentLoaded', function () {
  initPopovers();            // Memanggil fungsi untuk inisialisasi popover Bootstrap
  initCharacterClicks();     // Memanggil fungsi untuk interaksi klik karakter
});

// Ambil semua elemen dengan class 'nav-link'
const links = document.querySelectorAll('.nav-link');
// Ambil path halaman saat ini dari URL (misalnya: 'about.html')
const current = window.location.pathname;

// Loop setiap link di sidebar
links.forEach(link => {
  // Jika href pada link sama dengan nama file saat ini
  if (link.getAttribute('href') === current.split('/').pop()) {
    link.classList.add('active');       // Tambahkan class 'active' agar link ditandai sebagai aktif
  } else {
    link.classList.remove('active');    // Hapus class 'active' jika bukan halaman saat ini
  }
});

// Fungsi untuk menginisialisasi semua elemen yang menggunakan popover
function initPopovers() {
  // Pilih semua elemen yang punya atribut data-bs-toggle="popover"
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

  // Konversi NodeList ke array lalu loop satu per satu
  [...popoverTriggerList].forEach(popoverTriggerEl => {
    // Inisialisasi popover dari Bootstrap dengan trigger hover dan posisi di kanan
    new bootstrap.Popover(popoverTriggerEl, {
      trigger: 'hover',
      placement: 'right'
    });
  });
}

// Fungsi untuk mengatur aksi klik pada elemen karakter
function initCharacterClicks() {
  // Pilih semua elemen dengan class 'character'
  document.querySelectorAll('.character').forEach(character => {
    // Tambahkan event listener klik untuk setiap karakter
    character.addEventListener('click', function () {
      const imgSrc = this.getAttribute('data-img'); // Ambil path gambar dari atribut data-img
      const parentModal = this.closest('.modal-body'); // Temukan elemen modal-body terdekat
      const targetImg = parentModal.querySelector('img.character-img'); // Cari elemen gambar yang akan ditampilkan

      // Jika elemen gambar ditemukan, set src-nya dan tampilkan
      if (targetImg) {
        targetImg.src = imgSrc;
        targetImg.style.display = 'block';
      }
    });
  });
}
