// Step 1: Create a Character Object
const character = {
    name: "Hero",
    health: 100,
    class: "",
    specialAbility: "",
    randomizeHealth: function () {
        this.health = Math.floor(Math.random() * 101) + 50;
    },
    battle: function (otherCharacter) {
        const damage = Math.floor(Math.random() * 16) + 5;
        const oldHealth = otherCharacter.health;
        otherCharacter.health -= damage;
        console.log(`Character ${this.name} attacked Character ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${oldHealth} to ${otherCharacter.health}.`);
    }
};

// Step 2: Add a Random Class
const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
character.class = classes[Math.floor(Math.random() * classes.length)];

// Step 4: Assign a Special Ability
const abilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];
character.specialAbility = abilities[Math.floor(Math.random() * abilities.length)];

// Step 5: Create a generateCharacter() Function
function generateCharacter(name = null) {
    const names = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];
    const newCharacter = Object.assign({}, character);
    newCharacter.name = name || names[Math.floor(Math.random() * names.length)];
    newCharacter.class = classes[Math.floor(Math.random() * classes.length)];
    newCharacter.specialAbility = abilities[Math.floor(Math.random() * abilities.length)];
    newCharacter.randomizeHealth();
    return newCharacter;
}

// Step 7: Generate Multiple Characters
function generateMultipleCharacters(x) {
    const characters = [];
    for (let i = 0; i < x; i++) {
        characters.push(generateCharacter());
    }
    return characters;
}

// Testing the code
const randomCharacter = generateCharacter();
console.dir(randomCharacter);

const namedCharacter = generateCharacter("Drake");
console.dir(namedCharacter);

const character1 = generateCharacter("Zane");
const character2 = generateCharacter("Elara");

character1.battle(character2);

const party = generateMultipleCharacters(5);
console.dir(party);