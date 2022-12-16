const OutputView = require('../view/OutputView');
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
    console.log(this.game.setAnswer());
  }
}

module.exports = Controller;
