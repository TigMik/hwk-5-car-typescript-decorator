import Decorator from "./Decorator";
import Component from "./Component";


export default class HybridOilBasedEngineDecorator extends Decorator {
    isEngineHybridBase: boolean;
    
    constructor(component: Component, isEngineHybridBase: boolean) {
        super(component);
        this.isEngineHybridBase = isEngineHybridBase;
        this.changePrice();
    }

    private changePrice(): void {
        if (this.isEngineHybridBase) {
            this.price += 500;
        } 
    }

    toString(): string {
        return `${this.component.toString()} Our car has ${this.engine} engine that's why the price for car became ${this.price}$.`;
    }

}