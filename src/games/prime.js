import brainGame from '../index.js';
import getRandom from '../randomath.js';

const isPrime = () => {
  const rand = getRandom(0, 200);
  if (rand < 2) return 'no';
  for (let i = 2; i <= Math.sqrt(rand); i += 1) {
    if (rand % i === 0) return [rand, 'no'];
  }
  return [rand, 'yes'];
};

export default () => brainGame('Answer "yes" if given number is prime. Otherwise answer "no".', isPrime);
