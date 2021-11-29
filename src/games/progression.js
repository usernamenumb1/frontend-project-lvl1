import brainGame from '../index.js';

const getRandom = () => Math.floor(Math.random() * 30);

const getRandomStep = () => Math.floor(Math.random() * 9);

const getRandomProg = () => {
  let firstitem = getRandom();
  let step = getRandomStep();
  const arr = [firstitem];
  while (step < 2) step = getRandomStep();
  while (arr.length < 10) {
    const nextitem = firstitem + step;
    arr.push(nextitem);
    firstitem = nextitem;
  }
  const missspot = getRandomStep();
  const missint = arr[missspot];
  arr[missspot] = '..';
  return [arr.join(' '), missint];
};

export default () => brainGame('What number is missing in the progression?', getRandomProg);
