const OutputView = require('../view/OutputView');
const { MESSAGE } = require('../utils/constants');

class Controller {
  init() {
    OutputView.printMessage(MESSAGE.gameStart);
  }
}

module.exports = Controller;
