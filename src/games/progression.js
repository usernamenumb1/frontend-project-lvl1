import brainGame from '../index.js';
import getRandom from '../utils.js';

const getRandomProgression = () => {
  let firstItem = getRandom(0, 30);
  const step = getRandom(3, 9);
  const randomArray = [firstItem];
  while (randomArray.length < 10) {
    const nextitem = firstItem + step;
    randomArray.push(nextitem);
    firstItem = nextitem;
  }
  const missedNumberIndex = getRandom(0, 10);
  const missedNumber = randomArray[missedNumberIndex];
  randomArray[missedNumberIndex] = '..';
  return [randomArray.join(' '), missedNumber];
};

export default () => brainGame('What number is missing in the progression?', getRandomProgression);
