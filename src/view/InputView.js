const { input } = require('../utils/utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readNumbers(callback) {
    input(MESSAGE.inputNumbers, callback);
  },
};

module.exports = InputView;
