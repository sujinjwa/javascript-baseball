const AnswerMaker = require('../AnswerMaker');

class Game {
  #answer = [];

  setAnswer() {
    this.#answer = AnswerMaker.makeAnswer();
    return this.#answer;
  }
}

module.exports = Game;
