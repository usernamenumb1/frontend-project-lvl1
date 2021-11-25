import { greeting, isCorrect, getAnswer } from '../index.js';

const getRandom = () => Math.floor(Math.random() * 30);

const gcd = (pair) => {
  const arr = pair.split(' ').sort();
  const [r1, r2] = arr;
  const temp = [1];
  let n = 1;
  while (n <= r1) {
    if (r1 % n === 0 && r2 % n === 0) {
      if (!temp.includes(n)) temp.push(n);
      n += 1;
    } else n += 1;
  }
  return temp[temp.length - 1];
};

const getRandomPair = () => {
  let random1 = getRandom();
  let random2 = getRandom();
  let isgcd = gcd(`${random1} ${random2}`);
  while (isgcd === 1) {
    random1 = getRandom();
    random2 = getRandom();
    isgcd = gcd(`${random1} ${random2}`);
  }
  return `${random1} ${random2}`;
};

const brainGcd = () => {
  let count = 0;
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  while (count < 3) {
    const pair = getRandomPair();
    const correctans = gcd(pair);
    const answer = getAnswer(pair);
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

export default brainGcd;
