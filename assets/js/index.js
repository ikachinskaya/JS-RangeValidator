"use strict";
class RangeValidator {
  constructor(from, to) {
    // if (from > to) {
    //   throw new RangeError(
    //     "Начальное значение диапазона не может быть больше конечного"
    //   );
    // }
    this.from = from;
    // if (to < from) {
    //   throw new RangeError("Конечное значение диапазона не может быть меньше начального");
    // }
    this.to = to;
  }

  set from(newFrom) {
    if (isNaN(newFrom) || typeof newFrom !== "number") {
      throw new TypeError("Invalid type");
    }

    // if (this.to === undefined) {
    //   this._from = newFrom;
    // }
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
    if (newTo < this.from || typeof this.from !== "undefined") {
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
    for (let i = this.from; i <= this.to; i++) {
      array.push(i);
    }
    return array;
  }
  validate(value) {
    if (value > this.from && value < this.to) {
      return value;
    }
    return new RangeError("Число не входит в заданный диапазон");
  }
}

const rangeValidator = new RangeValidator(90, 10);
console.log(rangeValidator);
// console.log(rangeValidator.getterRange());
// console.log(rangeValidator.validate(5));
