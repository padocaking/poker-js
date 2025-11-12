import type { Card } from "./Card";

class Player {
    name: string;
    balance: number;
    position: number;
    hand: Card[];
    potBet: number;
    roundBet: number;
    fold: boolean;

    constructor (name: string, balance: number, position: number) {
        this.name = name;
        this.balance = balance;
        this.position = position;
        this.hand = [];
        this.potBet = 0;
        this.roundBet = 0;
        this.fold = false;
    }
}

export default Player