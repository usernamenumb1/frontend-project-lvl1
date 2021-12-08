import brainGame from '../index.js';
import utils from '../utils.js';

const getRandomExpression = () => {
  const expressions = '+-*';
  const symbol = expressions.charAt(utils.getRandom(0, expressions.length));
  const randomNumber1 = utils.getRandom();
  const randomNumber2 = utils.getRandom();
  const randomExpression = `${randomNumber1} ${symbol} ${randomNumber2}`;
  let resultOfExpression;
  switch (symbol) {
    case '+':
      resultOfExpression = randomNumber1 + randomNumber2;
      break;
    case '-':
      resultOfExpression = randomNumber1 - randomNumber2;
      break;
    case '*':
      resultOfExpression = randomNumber1 * randomNumber2;
      break;
    default:
      throw new Error(`no such symbol ${symbol}`);
  }
  return [randomExpression, resultOfExpression];
};
const gameRules = 'What is the result of the expression?';
export default () => brainGame(gameRules, getRandomExpression);
