const Validation = require('../utils/Validation');

class Player {
  #numbers = [];

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    Validation.checkBlank(numbers);
    Validation.checkNumberType(numbers);
    Validation.checkLength(numbers);
    Validation.checkValidRange(numbers);
    Validation.checkDuplication(numbers);
  }
}

module.exports = Player;
