import brainGame from '../index.js';
import getRandom from '../utils.js';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const gcd = () => {
  const rand1 = getRandom();
  const rand2 = getRandom();
  const res = getGcd(rand1, rand2);
  return res > 1 ? [`${rand1} ${rand2}`, res] : gcd();
};

export default () => brainGame('Find the greatest common divisor of given numbers.', gcd);
