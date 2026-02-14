const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// abrir imagem
document.querySelectorAll(".fotos-grid img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// fechar ao clicar fora
lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
