import brainGame from '../index.js';
import utils from '../utils.js';

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

const gcd = () => {
  const randomNumber1 = utils.getRandom();
  const randomNumber2 = utils.getRandom();
  const gcdOfRandomPair = getGcd(randomNumber1, randomNumber2);
  const randomPair = `${randomNumber1} ${randomNumber2}`;
  return [randomPair, gcdOfRandomPair];
};

export default () => brainGame('Find the greatest common divisor of given numbers.', gcd);
