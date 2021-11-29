import brainGame from '../index.js';

const getRandom = () => Math.floor(Math.random() * 100);

const solution = (arr) => {
  const [r1, e, r2] = arr;
  let result = 0;
  switch (e) {
    case '+':
      result = Number(r1) + Number(r2);
      break;
    case '-':
      result = Number(r1) - Number(r2);
      break;
    case '*':
      result = Number(r1) * Number(r2);
      break;
    default:
      break;
  }
  return result;
};

const getRandomExp = () => {
  const expressions = '+-*';
  const symbol = expressions.charAt(Math.floor(Math.random() * expressions.length));
  const random1 = getRandom();
  const random2 = getRandom();
  return [`${random1} ${symbol} ${random2}`, solution([random1, symbol, random2])];
};

export default () => brainGame('What is the result of the expression?', getRandomExp);
