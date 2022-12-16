const Game = require('../src/model/Game');

describe('Game 클래스 테스트', () => {
  test.each([
    ['', '[ERROR] 공백입니다. 값을 입력해주세요.'],
    ['음..다시 해볼까?', '[ERROR] 문자, 기호 이외의 숫자를 입력해주세요.'],
    ['3', '[ERROR] 게임 재시작 혹은 종료 여부는 1 또는 2로 입력해주세요.'],
    ['0', '[ERROR] 게임 재시작 혹은 종료 여부는 1 또는 2로 입력해주세요.'],
    ['1000', '[ERROR] 게임 재시작 혹은 종료 여부는 1 또는 2로 입력해주세요.'],
  ])(
    '예외처리 테스트 : 서로 다른 3개의 숫자에 대해 잘못된 입력값을 받은 경우 예외 처리한다',
    (input, expected) => {
      expect(() => {
        const game = new Game();
        game.validateCommand(input);
      }).toThrow(expected);
    }
  );
});
