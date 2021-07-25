"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = __importDefault(require("./Decorator"));
var DoorAndCarDecorator = (function (_super) {
    __extends(DoorAndCarDecorator, _super);
    function DoorAndCarDecorator(component, doors, color) {
        var _this = _super.call(this, component) || this;
        _this.doors = doors;
        _this.color = color;
        return _this;
    }
    DoorAndCarDecorator.prototype.increasePrice = function (amount) {
        this.price += amount;
    };
    DoorAndCarDecorator.prototype.toString = function () {
        return this.component.toString() + " We extend our car with " + this.doors + " doors and paint it with " + this.color + " color.";
    };
    return DoorAndCarDecorator;
}(Decorator_1.default));
exports.default = DoorAndCarDecorator;
//# sourceMappingURL=DoorAndCarDecorator.js.map