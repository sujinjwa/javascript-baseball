const MESSAGE = Object.freeze({
  gameStart: '숫자 야구 게임을 시작합니다.',
  inputNumbers: '숫자를 입력해주세요 : ',
  gameClose: '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n',
  inputCommand: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

const ERROR = Object.freeze({
  mustNotBeBlank: '[ERROR] 공백입니다. 값을 입력해주세요.',
  mustBeNumber: '[ERROR] 문자, 기호 이외의 숫자를 입력해주세요.',
  mustBeValidLength: '[ERROR] 입력해야 할 숫자의 개수는 3개입니다.',
  mustBeInValidRange: '[ERROR] 숫자는 1 이상 9 이하여야 합니다.',
  mustNotBeDulicated: '[ERROR] 동일한 숫자를 입력해서는 안됩니다.',
  mustBeValidCommand:
    '[ERROR] 게임 재시작 혹은 종료 여부는 1 또는 2로 입력해주세요.',
});

const ANSWER_RANGE = Object.freeze({
  min: 1,
  max: 9,
});

const BALL = (count) => `${count}볼`;
const STRIKE = (count) => `${count}스트라이크`;
const NOTHING = Object.freeze('낫싱');

const ANSWER_LENGTH = Object.freeze(3);
const ZERO = Object.freeze(0);
const RETRY = Object.freeze(1);
const QUIT = Object.freeze(2);

module.exports = {
  MESSAGE,
  ANSWER_LENGTH,
  ANSWER_RANGE,
  ERROR,
  ZERO,
  BALL,
  NOTHING,
  STRIKE,
  RETRY,
  QUIT,
};
