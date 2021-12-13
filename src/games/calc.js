import brainGame from '../index.js';
import utils from '../utils.js';

const getRandomExpression = () => {
  const operations = '+-*';
  const symbol = operations.charAt(utils.getRandom(0, operations.length));
  const randomNumber1 = utils.getRandom();
  const randomNumber2 = utils.getRandom();
  const question = `${randomNumber1} ${symbol} ${randomNumber2}`;
  let answer;
  switch (symbol) {
    case '+':
      answer = randomNumber1 + randomNumber2;
      break;
    case '-':
      answer = randomNumber1 - randomNumber2;
      break;
    case '*':
      answer = randomNumber1 * randomNumber2;
      break;
    default:
      throw new Error(`no such symbol ${symbol}`);
  }
  return [question, answer];
};
const gameRules = 'What is the result of the expression?';
export default () => brainGame(gameRules, getRandomExpression);
