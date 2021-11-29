import brainGame from '../index.js';
import getRandom from '../randomath.js';

const gcd = () => {
  const rand1 = getRandom();
  const rand2 = getRandom();
  const temp = [1];
  let n = 1;
  while (n <= rand1) {
    if (rand1 % n === 0 && rand2 % n === 0) {
      if (!temp.includes(n)) temp.push(n);
      n += 1;
    } else n += 1;
  }
  const res = temp[temp.length - 1];
  return res > 1 ? [`${rand1} ${rand2}`, res] : gcd();
};

export default () => brainGame('Find the greatest common divisor of given numbers.', gcd);
