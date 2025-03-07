// Select elements
const profileImage = document.querySelector('#profileImage');
const profileName = document.querySelector('#profileName');
const profileBio = document.querySelector('#profileBio');

const nameInput = document.querySelector('#nameInput');
const bioInput = document.querySelector('#bioInput');
const imageInput = document.querySelector('#imageInput');
const bgColorInput = document.querySelector('#bgColorInput');

// Update name function
function updateName() {
    const newName = nameInput.value;
    profileName.innerText = newName;
    console.log('Name updated to:', newName);
}

// Update bio function
function updateBio() {
    const newBio = bioInput.value;
    profileBio.innerText = newBio;
    console.log('Bio updated to:', newBio);
}

// Update profile image function with fixed width
function updateImage() {
    const imageName = imageInput.value;
    const newImageSrc = `./images/${imageName}.jpg`;
    profileImage.setAttribute('src', newImageSrc);
    profileImage.style.width = '100%';
    document.querySelector('.profile-card').style.width = '300px';
    console.log('Profile image updated to:', newImageSrc);
}


// Update background color function
function updateBgColor() {
    const newBgColor = bgColorInput.value;
    document.querySelector('#profile-card').style.backgroundColor = newBgColor;
    console.log('Background color updated to:', newBgColor);
}
