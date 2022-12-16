const Player = require('../src/model/Player');

describe('Player 클래스 테스트', () => {
  test.each([
    ['', '[ERROR] 공백입니다. 값을 입력해주세요.'],
    ['숫자 입력하라고?', '[ERROR] 문자, 기호 이외의 숫자를 입력해주세요.'],
    ['8910', '[ERROR] 입력해야 할 숫자의 개수는 3개입니다.'],
    ['012', '[ERROR] 숫자는 1 이상 9 이하여야 합니다.'],
    ['989', '[ERROR] 동일한 숫자를 입력해서는 안됩니다.'],
  ])(
    '예외처리 테스트 : 서로 다른 3개의 숫자에 대해 잘못된 입력값을 받은 경우 예외 처리한다',
    (input, expected) => {
      expect(() => {
        new Player(input);
      }).toThrow(expected);
    }
  );
});
