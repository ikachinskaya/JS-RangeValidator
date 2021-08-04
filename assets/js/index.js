"use strict";
class RangeValidator {
  constructor(from, to) {   
    this.from = from;   
    this.to = to;
  }

  set from(newFrom) {
    if (isNaN(newFrom) || typeof newFrom !== "number") {
      throw new TypeError("Invalid type");
    }

    if (newFrom > this.to || typeof this.to !== "undefined") {
      throw new RangeError(
        "Начальное значение диапазона не может быть больше конечного"
      );
    }

    this._from = newFrom;
  }

  get from() {
    return this._from;
  }

  set to(newTo) {
    if (isNaN(newTo) || typeof newTo !== "number") {
      throw new TypeError("Invalid type");
    }
   
    if (newTo < this.from) {
      throw new RangeError(
        "Конечное значение диапазона не может быть меньше начального"
      );
    }
    this._to = newTo;
  }

  get to() {
    return this._to;
  }

  getterRange() {
    const array = [];
    array.push(this.from, this.to);
    return array;
  }

  validate = (value) =>
    value >= this.from && value <= this.to
      ? value
      : new RangeError("Число не входит в заданный диапазон");
}

const rangeValidator = new RangeValidator(0, 10);
console.log(rangeValidator);
console.log(rangeValidator.getterRange());
console.log(rangeValidator.validate(5));
