const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Game = require('../model/Game');
const Player = require('../model/Player');
const { MESSAGE } = require('../utils/constants');

class Controller {
  constructor() {
    this.game = new Game();
    this.player;
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

  validateNumbers(numbers) {
    this.player = new Player(numbers);
  }
}

module.exports = Controller;
