import brainGame from '../index.js';
import getRandom from '../utils.js';

const isPrime = (rand) => {
  if (rand < 2) return 'no';
  for (let i = 2; i <= Math.sqrt(rand); i += 1) {
    if (rand % i === 0) return 'no';
  }
  return 'yes';
};

const getRandomPrime = () => {
  const rand = getRandom(0, 200);
  return [rand, isPrime(rand)];
};

export default () => brainGame('Answer "yes" if given number is prime. Otherwise answer "no".', getRandomPrime);
