import brainGame from '../index.js';
import getRandom from '../randomath.js';

const gcd = (arr) => {
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
  let isgcd = gcd([random1, random2]);
  while (isgcd < 2) {
    random1 = getRandom();
    random2 = getRandom();
    isgcd = gcd([random1, random2]);
  }
  return [`${random1} ${random2}`, gcd([random1, random2])];
};

export default () => brainGame('Find the greatest common divisor of given numbers.', getRandomPair);
