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
// 2. Carousel Logic (Smooth + Timer Auto Play)
// ==========================================
var slideIndex = 1;
var slideTimer = null; // Variable untuk menyimpan timer

// Jalankan carousel & timer pertama kali saat halaman siap
document.addEventListener("DOMContentLoaded", () => {
  showDivs(slideIndex);
  startTimer();
});

// Fungsi untuk klik tombol panah
function plusDivs(n) {
  showDivs(slideIndex += n);
  resetTimer(); // Reset timer saat pengguna klik tombol manual
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (!x || x.length === 0) return;
  
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  
  // Sembunyikan semua slide
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
  
  // Tampilkan slide yang dipilih dengan efek smooth
  x[slideIndex - 1].classList.add("active");
}

// Fungsi untuk memulai Otomatis Slide (Timer)
function startTimer() {
  // Angka 5000 = 5 Detik (bisa diubah sesuai keinginan)
  slideTimer = setInterval(() => {
    plusDivs(1);
  }, 5000); 
}

// Fungsi untuk me-reset Timer jika tombol manual diklik
function resetTimer() {
  clearInterval(slideTimer);
  startTimer();
}