const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const { MESSAGE } = require('../utils/constants');
const Game = require('../model/Game');

class Controller {
  constructor() {
    this.game = new Game();
  }
  init() {
    OutputView.printMessage(MESSAGE.gameStart);

    this.makeAnswer();
  }

  makeAnswer() {
    this.game.setAnswer();

    this.inputNumbers();
  }

  inputNumbers() {
    InputView.readNumbers(this.validateNumbers.bind(this));
  }

  validateNumbers(numbers) {}
}

module.exports = Controller;
