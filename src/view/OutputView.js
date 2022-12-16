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
    let { ball, nothing, strike } = game.getHint();
    if (nothing === ANSWER_LENGTH) return print(NOTHING);
    if (ball === ZERO) return print(STRIKE(strike));
    if (strike === ZERO) return print(BALL(ball));

    return print(`${BALL(ball)} ${STRIKE(strike)}`);
  },
};

module.exports = OutputView;
