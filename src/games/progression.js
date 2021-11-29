import brainGame from '../index.js';
import getRandom from '../randomath.js';

const getRandomProg = () => {
  let firstitem = getRandom(0, 30);
  const step = getRandom(3, 9);
  const arr = [firstitem];
  while (arr.length < 10) {
    const nextitem = firstitem + step;
    arr.push(nextitem);
    firstitem = nextitem;
  }
  const missspot = getRandom(0, 9);
  const missint = arr[missspot];
  arr[missspot] = '..';
  return [arr.join(' '), missint];
};

export default () => brainGame('What number is missing in the progression?', getRandomProg);
