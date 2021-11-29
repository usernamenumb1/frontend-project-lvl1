import brainGame from '../index.js';
import getRandom from '../randomath.js';

const isEven = () => {
  const rand = getRandom();
  return ((rand % 2 === 0) ? [rand, 'yes'] : [rand, 'no']);
};

export default () => brainGame('Answer "yes" if the number is even, otherwise answer "no".', isEven);
