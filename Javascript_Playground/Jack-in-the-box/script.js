const boxContainer = document.getElementById('box-container');
const button = document.getElementById('button');
const popSound = document.getElementById('pop-sound');
const popupImage = document.getElementById('popup-image');

// Array of images to display one after another
const images = [
    "./assets/img1.jpg",
    "./assets/img2.jpg",
    "./assets/img3.jpg",
    "./assets/img4.jpg",
    "./assets/img5.jpg",

];

let boxAnimation = lottie.loadAnimation({
    container: boxContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './assets/box.json'
});

function toggleBox() {
    if (boxContainer.getAttribute('data-state') === 'closed') {
        popSound.play();
        boxAnimation.goToAndPlay(0, true);
        boxContainer.setAttribute('data-state', 'open');

        // Show images with pop-up animation
        let index = 0;
        function showNextImage() {
            if (index < images.length) {
                popupImage.src = images[index];
                popupImage.style.opacity = "1";
                popupImage.style.transform = "translateX(-50%) scale(1)";
                popupImage.style.bottom = "300px"; // Moves up above the box

                setTimeout(() => {
                    popupImage.style.opacity = "0";
                    popupImage.style.transform = "translateX(-50%) scale(0)";
                    popupImage.style.bottom = "10px"; // Moves back inside
                    index++;
                    showNextImage();
                }, 700); // Time each image is visible
            } else {
                resetBox();
            }
        }

        setTimeout(showNextImage, 500); // Start showing images after animation starts
    }
}

function resetBox() {
    setTimeout(() => {
        boxContainer.setAttribute('data-state', 'closed');
    }, 500);
}

// Event Listeners for both box and button
boxContainer.addEventListener('click', toggleBox);
button.addEventListener('click', toggleBox);