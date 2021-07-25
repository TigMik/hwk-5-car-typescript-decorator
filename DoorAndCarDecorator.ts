import Decorator from "./Decorator";
import Component from "./Component";


export default class DoorAndCarDecorator extends Decorator {
    doors: number;
    color: string;

    constructor(component: Component, doors: number, color: string) {
        super(component);
        this.doors = doors;
        this.color = color;
    }

    increasePrice(amount: number): void {
        this.price += amount;
    }

    toString(): string {
        return `${this.component.toString()} We extend our car with ${this.doors} doors and paint it with ${this.color} color.`;
    }
}