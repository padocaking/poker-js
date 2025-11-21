import Player from "./Player";

export class Game {
    players: Player[]

    constructor () {
        this.players = [];
        this.setup();
    }

    setup () : void {
        const p1 = new Player(0, 'Flavio Bucetao', 1000, 0);
        const p2 = new Player(1, 'Paula Picagrossa', 1000, 1);
        const p3 = new Player(2, 'Gregório Barroso', 1000, 2);
        const p4 = new Player(3, 'João Grandes Bolas', 1000, 3);
        this.players.push(p1,p2,p3,p4);
    }
}

const game = new Game;
export default game;