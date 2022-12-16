const { print } = require('../utils/utils');
const {
  ZERO,
  BALL,
  NOTHING,
  STRIKE,
  ANSWER_LENGTH,
} = require('../utils/constants');

const OutputView = {
  printMessage(message) {
    print(message);
  },

  printHint(game) {
    const HINTS = game.getHint();
    if (HINTS.ball > ZERO) {
      if (HINTS.strike > ZERO) {
        return print(`${BALL(HINTS.ball)} ${STRIKE(HINTS.strike)}`);
      }
      return print(BALL(HINTS.ball));
    }
    if (HINTS.strike === ANSWER_LENGTH) print(STRIKE(HINTS.strike));
    if (HINTS.nothing === ANSWER_LENGTH) print(NOTHING);
  },
};

module.exports = OutputView;
