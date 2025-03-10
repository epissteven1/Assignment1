const characters = document.querySelectorAll('.character');
const characterName = document.getElementById('character-name');
const characterImage = document.getElementById('character-image');

characters.forEach(character => {
    character.addEventListener('click', function () {
        characters.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');

        characterName.textContent = this.getAttribute('data-name');
        characterImage.src = this.getAttribute('data-image');
        characterImage.style.display = 'block';
    });
});