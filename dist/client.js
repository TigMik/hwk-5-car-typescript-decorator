"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = __importDefault(require("./Car"));
var DoorAndCarDecorator_1 = __importDefault(require("./DoorAndCarDecorator"));
var HybridOilBasedEngineDecorator_1 = __importDefault(require("./HybridOilBasedEngineDecorator"));
var bmw = new Car_1.default('BMW', 'hybrid', 440, 8000);
console.log('bmw :>> ', bmw);
console.log(bmw.toString());
var decorator1 = new DoorAndCarDecorator_1.default(bmw, 4, 'silver');
console.log('decorator1 :>> ', decorator1);
console.log(decorator1.toString());
var decorator2 = new HybridOilBasedEngineDecorator_1.default(decorator1, true);
console.log('decorator2 :>> ', decorator2);
console.log(decorator2.toString());
//# sourceMappingURL=client.js.map