// Select elements
const profileImage = document.querySelector('#profileImage');
const profileName = document.querySelector('#profileName');
const profileBio = document.querySelector('#profileBio');

const nameInput = document.querySelector('#nameInput');
const bioInput = document.querySelector('#bioInput');
const imageInput = document.querySelector('#imageInput');
const bgColorInput = document.querySelector('#bgColorInput');
const updateButton = document.querySelector('#updateButton');

// Update name function
function updateName() {
    const newName = nameInput.value.trim();
    if (newName) {
        profileName.innerText = newName;
        console.log('Name updated to:', newName);
    } else {
        console.log('Name not changed.');
    }
}

// Update bio function
function updateBio() {
    const newBio = bioInput.value.trim();
    if (newBio) {
        profileBio.innerText = newBio;
        console.log('Bio updated to:', newBio);
    } else {
        console.log('Bio not changed.');
    }
}

// Update profile image function with fixed width
function updateImage() {
    const imageName = imageInput.value.trim();
    if (imageName) {
        const newImageSrc = `./images/${imageName}.jpg`;
        profileImage.setAttribute('src', newImageSrc);
        profileImage.style.width = '100%';
        document.querySelector('#profile-card').style.width = '300px';
        console.log('Profile image updated to:', newImageSrc);
    } else {
        console.log('No image name provided, profile image not updated.');
        profileImage.style.width = 'auto';
    }
}


// Update background color function
function updateBgColor() {
    let newBgColor = bgColorInput.value;
    if (newBgColor && newBgColor !== '#000000') {
        document.querySelector('#profile-card').style.backgroundColor = newBgColor;
        console.log('Background color updated to:', newBgColor);
    } else {
        console.log('Background color not changed.');
    }
}


// Add event listener to the update button
updateButton.addEventListener('click', () => {
    updateName();
    updateBio();
    updateImage();
    updateBgColor();
});
