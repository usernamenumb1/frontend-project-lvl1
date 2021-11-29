import brainGame from '../index.js';

const isEven = (int) => ((int % 2 === 0) ? 'yes' : 'no');

const getRandom = () => {
  const rand = Math.floor(Math.random() * 100);
  return [rand, isEven(rand)];
};

export default () => brainGame('Answer "yes" if the number is even, otherwise answer "no".', getRandom);
