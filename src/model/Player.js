const Validation = require('../utils/Validation');

class Player {
  #numbers = [];

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.changeToArray(numbers);
  }

  validate(numbers) {
    Validation.checkBlank(numbers);
    Validation.checkNumberType(numbers);
    Validation.checkLength(numbers);
    Validation.checkValidRange(numbers);
    Validation.checkDuplication(numbers);
  }

  changeToArray(numbers) {
    return numbers.split('').map((number) => Number(number));
  }

  getInputtedNumbers() {
    return this.#numbers;
  }
}

module.exports = Player;
