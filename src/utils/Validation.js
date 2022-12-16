const {
  ERROR,
  ZERO,
  ANSWER_LENGTH,
  ANSWER_RANGE,
} = require('../utils/constants');

const Validation = {
  checkBlank(input) {
    if (input.length === ZERO) {
      throw ERROR.mustNotBeBlank;
    }
  },

  checkNumberType(input) {
    if (Number.isNaN(Number(input))) {
      throw ERROR.mustBeNumber;
    }
  },

  checkLength(input) {
    if (input.length !== ANSWER_LENGTH) {
      throw ERROR.mustBeValidLength;
    }
  },

  checkValidRange(input) {
    let numbers = input.split('');
    numbers.forEach((number) => {
      if (!(number >= ANSWER_RANGE.min && number <= ANSWER_RANGE.max)) {
        throw ERROR.mustBeInValidRange;
      }
    });
  },

  checkDuplication(input) {
    if (input.length !== new Set(input).size) {
      throw ERROR.mustNotBeDulicated;
    }
  },
};

module.exports = Validation;
