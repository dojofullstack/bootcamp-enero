
// clase mapa del jugador
class MapaPlayer {

    constructor() {
        this.x = 15;
        this.y = 10;
    }

    moverX(valor) {
        this.x += valor;
        console.log(`Nueva posición en X: ${this.x}`);
    }

    moverY(valor) {
        this.y += valor;
        console.log(`Nueva posición en Y: ${this.y}`);
    }

}