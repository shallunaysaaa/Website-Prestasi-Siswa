// Contoh script untuk efek saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    const studentCards = document.querySelectorAll('.student-card');

    // Menambahkan efek animasi saat elemen siswa ditampilkan
    studentCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transition = "opacity 1s ease-in-out";
        }, 300 * index);
    });
});
