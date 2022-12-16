const AnswerMaker = require('../AnswerMaker');

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
    this.#answer.map((number, index) => {
      if (PLAYER_NUMBERS.includes(number)) {
        if (PLAYER_NUMBERS[index] === number) return (this.#hint.strike += 1);
        return (this.#hint.ball += 1);
      }
      return (this.#hint.nothing += 1);
    });
  }

  getHint() {
    return this.#hint;
  }
}

module.exports = Game;
