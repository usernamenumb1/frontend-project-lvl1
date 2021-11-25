import { greeting, isCorrect, getAnswer } from '../index.js';

const getRandom = () => Math.floor(Math.random() * 100);

const getRandomExp = () => {
  const expressions = '+-*';
  const symbol = expressions.charAt(Math.floor(Math.random() * expressions.length));
  const random1 = getRandom();
  const random2 = getRandom();
  return `${random1} ${symbol} ${random2}`;
};

const solution = (exp) => {
  const arr = exp.split(' ');
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

const brainCalc = () => {
  let count = 0;
  const name = greeting();
  console.log('What is the result of the expression?');
  while (count < 3) {
    const exp = getRandomExp();
    const answer = getAnswer(exp);
    const correctans = solution(exp);
    if (isCorrect(correctans, answer)) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctans}.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) console.log(`Congratulations, ${name}!`);
};

export default brainCalc;
