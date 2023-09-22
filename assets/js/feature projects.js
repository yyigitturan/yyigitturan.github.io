let currentIndex = 0;
const images = [
    "assets/images/projects/multiple/1.png",
    "assets/images/projects/multiple/2.png",
    "assets/images/projects/multiple/3.png"
];

function changeImage(offset) {
    currentIndex += offset;

    // Döngüsel olarak resimleri gez
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const imageElement = document.querySelector(".featured-project-image");
    imageElement.src = images[currentIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    prevButton.addEventListener("click", () => changeImage(-1));
    nextButton.addEventListener("click", () => changeImage(1));
});

function showOriginalImage(imagePath) {
    window.open(imagePath, '_blank'); // Resmi yeni bir pencerede açar
}


function openProjectLink() {
    window.open("https://web-app-multiple-disease-prediction-system-ml.streamlit.app/", '_blank'); // Belirlediğiniz URL'yi yeni bir pencerede açar
}
