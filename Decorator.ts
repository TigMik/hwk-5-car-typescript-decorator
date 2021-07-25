import Component from "./Component";

export default class Decorator implements Component {
    protected component: Component;
    model: string;
    engine: string;
    power: number;
    price: number;

    constructor(component: Component) {
        this.component = component;
        this.model = this.component.model;
        this.engine = this.component.engine;
        this.power = this.component.power;
        this.price = this.component.price;
    }
}
