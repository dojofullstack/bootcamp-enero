




// clases en JavaScript

class Player extends MapaPlayer {

    constructor(name, health, level, inventory, isAlive) {
        super();
        this.version = 1.0;
        this.name = name;
        this.health = health;
        this.level = level;
        this.isAlive = isAlive;
        this.inventory = inventory;
    }

    empezarJuego() {
        this.name = 'Player1';
        console.log(`¡Bienvenido ${this.name} al juego!`);
        
        this.moverX(100);
    }

    subirNivel() {
        this.level += 1;
        console.log(`${this.name} ha subido al nivel ${this.level}!`);
    }

}



const playerHenry = new Player('Henry', 100, 10, ['Sword', 'Shield'], true);

console.log('Player Henry Object:', playerHenry);
console.log('Player Henry Name:', playerHenry.name);
console.log('Player Henry Inventory:', playerHenry.inventory);

playerHenry.empezarJuego();
playerHenry.subirNivel();

const fecha = new Date();

// console.log('Fecha actual:', fecha.getFullYear());
// console.log('Fecha actual:', fecha.getHours());