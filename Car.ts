import Component from "./Component";

export default class Car implements Component {
    model: string;
    engine: string;
    power: number;
    price: number;
    
    constructor(model: string, engine: string, power: number, price: number) {
        this.model = model;
        this.engine = engine;
        this.power = power;
        this.price = price;
    }

    toString(): string {
        return `${this.model} with ${this.engine} engine and the price is ${this.price}$.`;
    }

}