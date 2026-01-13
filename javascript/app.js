

console.log('Hello, World!');

// Dominar variables y tipos de datos
// Entender let, const, números, strings, booleanos, null y undefined. Cero var.

// inspirado en juegos de rol (RPG)
// var player = "Henry Coding"; // string
let playerName = 'Henry Coding'; // string
const playerLevel = 10; // número
let isAlive = true // booleano
let playerHealth = null; // null
let playerMana; // undefined


console.log('Player Name:', playerName);
console.log('Player Level:', playerLevel);
console.log('Is Alive:', isAlive);
console.log('Player Health:', playerHealth);
console.log('Player Mana:', playerMana);

// Actualizando variables
playerName = 'Henry the Brave';
isAlive = false;
playerHealth = 0;
// playerLevel = 11; // Esto causará un error porque playerLevel es una constante

console.log('Updated Player Name:', playerName);
console.log('Updated Is Alive:', isAlive);
console.log('Updated Player Health:', playerHealth);
console.log('Updated Player Level:', playerLevel);




// Trabajar con objetos y arrays como un pro
// Entender objetos, arrays, propiedades, métodos, indexación y manipulación de datos.
    
// Objeto jugador
const player = {
    name: 'Henry Coding',
    level: 10,
    isAlive: true,
    health: 100,
    mana: 50,
    inventory: ['Sword', 'Shield', 'Health Potion'],
    profileCustom: {
        hairColor: 'Brown',
        eyeColor: 'Blue',
        armorType: 'Leather'
    },
    levelUp: function () {
        this.level += 1;
        console.log(`${this.name} has leveled up to level ${this.level}!`);
    },
    startGame: function () {
        console.log(`Welcome ${this.name} to the game!`);
    }
};


console.log('Player Object:', player);
console.log('Player Name from Object:', player.name);
console.log('Player Inventory:', player.inventory);
console.log('Player Hair Color:', player.profileCustom.hairColor);

// actualizar propiedades del objeto
player.level = 11;
player.isAlive = false;
player.health = 0;
player.inventory.push('Mana Potion');
player.profileCustom.armorType = 'Chainmail';

console.log('Updated Player Level:', player.level);
console.log('Updated Is Alive:', player.isAlive);
console.log('Updated Player Health:', player.health);
console.log('Updated Player Inventory:', player.inventory);
console.log('Updated Armor Type:', player.profileCustom.armorType);


// arreglos o arrays
const enemies = [
    "Goblin", "Orc", "Troll"
];

console.log('Enemies Array:', enemies);
console.log('First Enemy:', enemies[0]);
console.log('First Enemy:', enemies[1]);
console.log('First Enemy:', enemies[2]);

//agregar elementos al array
enemies.push("Dragon");
console.log('Updated Enemies Array:', enemies);

// eliminar el primer elemento del array
// enemies.shift();
console.log('Enemies Array after shift:', enemies);

// eliminar el último elemento del array
// enemies.pop();
console.log('Enemies Array after pop:', enemies);

// modificar un elemento del array
enemies[0] = "Dark Goblin";
console.log('Enemies Array after modification:', enemies);


// para eliminar un elemento específico del array
const index = enemies.indexOf("Troll");
enemies.splice(index, 1); // elimina 1 elemento en el índice encontrado

