import brainGame from '../index.js';
import getRandom from '../randomath.js';

const isEven = (int) => ((int % 2 === 0) ? 'yes' : 'no');

const getRandomInt = () => getRandom(0, 100, isEven);

export default () => brainGame('Answer "yes" if the number is even, otherwise answer "no".', getRandomInt);
