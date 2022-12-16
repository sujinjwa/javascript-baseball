const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Game = require('../model/Game');
const Player = require('../model/Player');
const { MESSAGE, RETRY } = require('../utils/constants');
const { close } = require('../utils/utils');

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
    console.log(this.game.getAnswer());

    this.inputNumbers();
  }

  inputNumbers() {
    InputView.readNumbers(this.validateNumbers.bind(this));
  }

  validateNumbers(numbers) {
    this.player = new Player(numbers);
    //console.log(this.player.getInputtedNumbers());

    this.compareNumbers();
  }

  compareNumbers() {
    this.game.resetHint();
    this.game.compareAnswerWithNumbers(this.player);
    //console.log(this.game.getHint());

    this.showHint();
  }

  showHint() {
    OutputView.printHint(this.game);

    this.checkSuccess();
  }

  checkSuccess() {
    if (this.game.isSucceeded()) return this.retryOrClose();

    return this.inputNumbers();
  }

  retryOrClose() {
    OutputView.printMessage(MESSAGE.gameClose);
    InputView.readCommand(this.validateCommand.bind(this));
  }

  validateCommand(command) {
    this.game.validateCommand(command);

    this.checkCommand(Number(command));
  }

  checkCommand(command) {
    if (command === RETRY) return this.makeAnswer();

    this.close();
  }

  close() {
    close();
  }
}

module.exports = Controller;
