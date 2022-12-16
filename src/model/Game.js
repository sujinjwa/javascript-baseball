const AnswerMaker = require('../AnswerMaker');
const Validation = require('../utils/Validation');
const { ANSWER_LENGTH } = require('../utils/constants');

class Game {
  #answer = [];
  #hint = { ball: 0, nothing: 0, strike: 0 };

  setAnswer() {
    this.#answer = AnswerMaker.makeAnswer();
  }

  getAnswer() {
    return this.#answer;
  }

  compareAnswerWithNumbers(player) {
    const PLAYER_NUMBERS = player.getInputtedNumbers();
    this.#answer.forEach((number, index) => {
      if (PLAYER_NUMBERS.includes(number)) {
        if (PLAYER_NUMBERS[index] === number) {
          this.#hint.strike += 1;
          return;
        }
        this.#hint.ball += 1;
        return;
      }
      this.#hint.nothing += 1;
    });
  }

  resetHint() {
    this.#hint = { ball: 0, nothing: 0, strike: 0 };
  }

  getHint() {
    return this.#hint;
  }

  isSucceeded() {
    if (this.#hint.strike === ANSWER_LENGTH) {
      return true;
    }
    return false;
  }

  validateCommand(command) {
    Validation.checkBlank(command);
    Validation.checkNumberType(command);
    Validation.checkValidCommand(Number(command));
  }
}

module.exports = Game;
