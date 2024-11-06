const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const card = document.getElementById("card-container");

// Fungsi untuk scroll kanan
nextButton.addEventListener("click", () => {
    card.scrollBy({
        left: 200, // Geser ke kanan sebanyak 200px
        behavior: "smooth", // Efek smooth scrolling
    });
});

// Fungsi untuk scroll kiri
prevButton.addEventListener("click", () => {
    card.scrollBy({
        left: -200, // Geser ke kiri sebanyak 200px
        behavior: "smooth", // Efek smooth scrolling
    });
});
