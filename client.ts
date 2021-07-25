import Car from "./Car";
import DoorAndCarDecorator from './DoorAndCarDecorator';
import HybridOilBasedEngineDecorator from './HybridOilBasedEngineDecorator';

const bmw = new Car('BMW', 'hybrid', 440, 8000);
// console.log('bmw :>> ', bmw);
console.log(bmw.toString());

const decorator1 = new DoorAndCarDecorator(bmw, 4, 'silver');
// console.log('decorator1 :>> ', decorator1);
console.log(decorator1.toString());

const decorator2 = new HybridOilBasedEngineDecorator(decorator1, true);
// console.log('decorator2 :>> ', decorator2);
console.log(decorator2.toString());


