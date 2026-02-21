const images = document.querySelectorAll(".fotos-grid img, .carta-escrita img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let index = 0;
let scale = 1;

images.forEach((img, i) => {
    img.addEventListener("click", () => {
        index = i;
        showImage();
        lightbox.style.display = "flex";
    });
});

function showImage(){
    lightboxImg.src = images[index].src;
    scale = 1;
    lightboxImg.style.transform = `scale(1)`;
}

// fechar
lightbox.addEventListener("click", ()=>{
    lightbox.style.display="none";
});

// zoom scroll
lightboxImg.addEventListener("wheel", (e)=>{
    e.preventDefault();
    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(.8, scale), 3);
    lightboxImg.style.transform = `scale(${scale})`;
});