
/**
 *  {Object} Warrior
 * {string} name - The name of the warrior.
 * {number} hp - The health points of the warrior.
 * {number} strength - The strength of the warrior, used to calculate attack damage.
 * {function(): number} attack - Function to simulate an attack, returning the damage dealt.
 */
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
/**
 * Simulates a battle between two warriors, Thor and Zeus, over 10 rounds.
 * Logs the result of each round and determines the winner based on remaining health points.
 */
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