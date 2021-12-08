import brainGame from '../index.js';
import utils from '../utils.js';

const isEven = (int) => {
  if (int % 2 === 0) return true;
  return false;
};

const getRandomEven = () => {
  const randomNumber = utils.getRandom();
  const isRandomNumberEven = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, isRandomNumberEven];
};
export default () => brainGame('Answer "yes" if the number is even, otherwise answer "no".', getRandomEven);
