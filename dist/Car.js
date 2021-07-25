"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = (function () {
    function Car(model, engine, power, price) {
        this.model = model;
        this.engine = engine;
        this.power = power;
        this.price = price;
    }
    Car.prototype.toString = function () {
        return this.model + " with " + this.engine + " engine and the price is " + this.price + "$.";
    };
    return Car;
}());
exports.default = Car;
//# sourceMappingURL=Car.js.map