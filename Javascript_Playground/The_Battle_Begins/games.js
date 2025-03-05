// Define the warrior objects
const thor = {
    name: 'Thor',
    hp: 100,
    strength: 12,
    attack: function () {
        return Math.floor(Math.random() * this.strength);
    }
};

const zeus = {
    name: 'Zeus',
    hp: 100,
    strength: 10,
    attack: function () {
        return Math.floor(Math.random() * this.strength);
    }
};

// Function to simulate the battle
function battle() {
    for (let round = 1; round <= 10; round++) {
        console.log(`=== Round ${round} ===`);

        // Thor attacks Zeus
        let damage = thor.attack();
        zeus.hp -= damage;
        console.log(`Thor attacks Zeus and does ${damage} damage!`);
        console.log(`Thor HP: ${thor.hp} | Zeus HP: ${zeus.hp}`);

        // Zeus attacks Thor
        damage = zeus.attack();
        thor.hp -= damage;
        console.log(`Zeus attacks Thor and does ${damage} damage!`);
        console.log(`Thor HP: ${thor.hp} | Zeus HP: ${zeus.hp}`);

        console.log(''); // Empty line for better readability
    }

    // Determine the winner
    if (thor.hp > zeus.hp) {
        console.log(`🏆 Thor WINS the battle! 🏆`);
    } else if (zeus.hp > thor.hp) {
        console.log(`🏆 Zeus WINS the battle! 🏆`);
    } else {
        console.log("It's a draw!");
    }
}

// Start the battle
battle();