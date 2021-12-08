import brainGame from '../index.js';
import utils from '../utils.js';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getRandomPrime = () => {
  const randomNumber = utils.getRandom(0, 200);
  const isRandomNumberPrime = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, isRandomNumberPrime];
};
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export default () => brainGame(gameRules, getRandomPrime);
