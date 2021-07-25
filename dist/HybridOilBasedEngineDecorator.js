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
var HybridOilBasedEngineDecorator = (function (_super) {
    __extends(HybridOilBasedEngineDecorator, _super);
    function HybridOilBasedEngineDecorator(component, isEngineHybridBase) {
        var _this = _super.call(this, component) || this;
        _this.isEngineHybridBase = isEngineHybridBase;
        _this.changePrice();
        return _this;
    }
    HybridOilBasedEngineDecorator.prototype.changePrice = function () {
        if (this.isEngineHybridBase) {
            this.price += 500;
        }
    };
    HybridOilBasedEngineDecorator.prototype.toString = function () {
        return this.component.toString() + " Our car has " + this.engine + " engine that's why the price for car became " + this.price + "$.";
    };
    return HybridOilBasedEngineDecorator;
}(Decorator_1.default));
exports.default = HybridOilBasedEngineDecorator;
//# sourceMappingURL=HybridOilBasedEngineDecorator.js.map