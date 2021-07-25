"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Decorator = (function () {
    function Decorator(component) {
        this.component = component;
        this.model = this.component.model;
        this.engine = this.component.engine;
        this.power = this.component.power;
        this.price = this.component.price;
    }
    return Decorator;
}());
exports.default = Decorator;
//# sourceMappingURL=Decorator.js.map