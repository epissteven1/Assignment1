const colorOptions = document.querySelectorAll('.color-option');
const colorDisplay = document.getElementById('color-display');
const colorMain = document.getElementById('mainContainer');
const colorSection = document.getElementById('colorSection');
const defaultSectionColor = colorSection.style.backgroundColor;
const defaultMainColor = colorMain.style.backgroundColor;
const header = document.querySelector('h1');
const paragraph = document.querySelector('p');

colorOptions.forEach(option => {
    option.addEventListener('click', (event) => {
        event.stopPropagation();
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        event.target.classList.add('selected');
        const selectedColor = event.target.getAttribute('data-color');
        colorDisplay.textContent = `Selected Color: ${selectedColor}`;
        colorMain.style.backgroundColor = event.target.style.backgroundColor;
        colorSection.style.backgroundColor = event.target.style.backgroundColor;
        if (selectedColor === 'Yellow') {
            header.style.color = 'black';
            paragraph.style.color = 'black';
            colorDisplay.style.color = 'black';
        } else {
            header.style.color = 'white';
            paragraph.style.color = 'white';
            colorDisplay.style.color = 'white';
        }
    });
});

document.addEventListener('click', (event) => {
    if (!colorSection.contains(event.target) && !event.target.classList.contains('color-option')) {
        colorSection.style.backgroundColor = defaultSectionColor;
        colorMain.style.backgroundColor = defaultMainColor;
        header.style.color = 'rgb(1, 4, 6)';
        paragraph.style.color = 'rgb(1, 4, 6)';
        colorDisplay.style.color = 'rgb(1, 4, 6)';
    }
});
