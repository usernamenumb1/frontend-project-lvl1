import brainGame from '../index.js';
import getRandom from '../utils.js';

const getRandomExpression = () => {
  const expressions = '+-*';
  const symbol = expressions.charAt(Math.floor(Math.random() * expressions.length));
  const rand1 = getRandom();
  const rand2 = getRandom();
  let result = 0;
  switch (symbol) {
    case '+':
      result = rand1 + rand2;
      break;
    case '-':
      result = rand1 - rand2;
      break;
    case '*':
      result = rand1 * rand2;
      break;
    default:
      result = rand1 + rand2;
      break;
  }
  return [`${rand1} ${symbol} ${rand2}`, result];
};

export default () => brainGame('What is the result of the expression?', getRandomExpression);
