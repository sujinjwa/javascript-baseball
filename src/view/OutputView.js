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
    if (HINTS.nothing === ANSWER_LENGTH) return print(NOTHING);
    if (HINTS.ball === ZERO) return print(STRIKE(HINTS.strike));
    if (HINTS.strike === ZERO) return print(BALL(HINTS.ball));

    return print(`${BALL(HINTS.ball)} ${STRIKE(HINTS.strike)}`);
  },
};

module.exports = OutputView;
