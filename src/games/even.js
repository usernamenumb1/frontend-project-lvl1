import brainGame from '../index.js';
import getRandom from '../utils.js';

const isEven = (int) => ((int % 2 === 0) ? 'yes' : 'no');

const getRandomEven = () => {
  const rand = getRandom();
  return [rand, isEven(rand)];
};
export default () => brainGame('Answer "yes" if the number is even, otherwise answer "no".', getRandomEven);
