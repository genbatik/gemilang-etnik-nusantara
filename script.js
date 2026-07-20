// ==========================================
// 1. Loader & Intersection Observer
// ==========================================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1200);
  }
});

const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.project-img').forEach((img) => obs.observe(img));

// ==========================================
// 2. Carousel Logic (Smooth + Auto-Play Timer)
// ==========================================
var slideIndex = 1;
var slideTimer = null; // Variabel penyimpan timer

// Inisialisasi Carousel saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", () => {
  showDivs(slideIndex);
  startTimer();
});

// Fungsi Navigasi Tombol Manual
function plusDivs(n) {
  showDivs(slideIndex += n);
  resetTimer(); // Reset timer saat diklik manual agar transisi konsisten
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (!x || x.length === 0) return;
  
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  
  // Sembunyikan class active dari semua slide
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
  
  // Tampilkan slide yang aktif
  x[slideIndex - 1].classList.add("active");
}

// Fungsi Otomatis Jalan (Setiap 5 Detik)
function startTimer() {
  slideTimer = setInterval(() => {
    plusDivs(1);
  }, 5000); // 5000ms = 5 Detik
}

// Fungsi Reset Timer ketika diklik manual
function resetTimer() {
  clearInterval(slideTimer);
  startTimer();
}