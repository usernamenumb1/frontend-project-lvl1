import brainGame from '../index.js';

const isPrime = (int) => {
  if (int < 2) return 'no';
  for (let i = 2; i <= Math.sqrt(int); i += 1) {
    if (int % i === 0) return 'no';
  }
  return 'yes';
};

const getRandom = () => {
  const rand = Math.floor(Math.random() * 200);
  return [rand, isPrime(rand)];
};

export default () => brainGame('Answer "yes" if given number is prime. Otherwise answer "no".', getRandom);
