import brainGame from '../index.js';
import utils from '../utils.js';

const getProgression = (firstItem, step) => {
  const arrayOfProgression = [];
  let currentItem = firstItem;
  while (arrayOfProgression.length < 10) {
    const nextItem = currentItem + step;
    arrayOfProgression.push(currentItem);
    currentItem = nextItem;
  }
  return arrayOfProgression;
};

const getRandomProgression = () => {
  const firstItem = utils.getRandom(0, 30);
  const step = utils.getRandom(3, 9);
  const progressionArray = getProgression(firstItem, step);
  const missedNumberIndex = utils.getRandom(0, 10);
  const missedNumber = progressionArray[missedNumberIndex];
  progressionArray[missedNumberIndex] = '..';
  const stringifyProgression = progressionArray.join(' ');
  return [stringifyProgression, missedNumber];
};

export default () => brainGame('What number is missing in the progression?', getRandomProgression);
