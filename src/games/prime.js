import brainGame from '../index.js';
import getRandom from '../randomath.js';

const isPrime = (int) => {
  if (int < 2) return 'no';
  for (let i = 2; i <= Math.sqrt(int); i += 1) {
    if (int % i === 0) return 'no';
  }
  return 'yes';
};

const getRandomInt = () => getRandom(0, 200, isPrime);

export default () => brainGame('Answer "yes" if given number is prime. Otherwise answer "no".', getRandomInt);
