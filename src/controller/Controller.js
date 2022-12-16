const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const GameMachine = require('../model/GameMachine');
const Player = require('../model/Player');
const { MESSAGE, RETRY } = require('../utils/constants');
const { close } = require('../utils/utils');

class Controller {
  constructor() {
    this.gameMachine = new GameMachine();
    this.player;
  }
  init() {
    OutputView.printMessage(MESSAGE.gameStart);

    this.makeAnswer();
  }

  makeAnswer() {
    this.gameMachine.setAnswer();

    this.inputNumbers();
  }

  inputNumbers() {
    InputView.readNumbers(this.validateNumbers.bind(this));
  }

  validateNumbers(numbers) {
    this.player = new Player(numbers);

    this.compareNumbers();
  }

  compareNumbers() {
    this.gameMachine.resetHint();
    this.gameMachine.compareAnswerWithNumbers(this.player);

    this.showHint();
  }

  showHint() {
    OutputView.printHint(this.gameMachine);

    this.checkSuccess();
  }

  checkSuccess() {
    if (this.gameMachine.isSucceeded()) return this.retryOrClose();

    return this.inputNumbers();
  }

  retryOrClose() {
    OutputView.printMessage(MESSAGE.gameClose);
    InputView.readCommand(this.validateCommand.bind(this));
  }

  validateCommand(command) {
    this.gameMachine.validateCommand(command);

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
