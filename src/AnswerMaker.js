const RandomNumberMaker = require('./RandomNumberMaker');
const { ANSWER_LENGTH } = require('./utils/constants');

const AnswerMaker = {
  makeAnswer() {
    let answer = [];
    while (answer.length !== ANSWER_LENGTH) {
      const NUMBER = RandomNumberMaker.generate();
      if (answer.includes(NUMBER)) continue;
      answer.push(NUMBER);
    }

    return answer;
  },
};

module.exports = AnswerMaker;
