import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  set range(range) {
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    if (this instanceof EVCar) {
      return new Car();
    }

    return new this.constructor();
  }
}
