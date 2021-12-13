import brainGame from '../index.js';
import utils from '../utils.js';

const getProgression = (firstItem, step) => {
  const progressionArray = [];
  const maxProgressionLength = 10;
  for (let i = 0; i < maxProgressionLength; i += 1) {
    progressionArray.push(firstItem + (step * i));
  }
  return progressionArray;
};

const getRandomProgression = () => {
  const firstItem = utils.getRandom(0, 30);
  const step = utils.getRandom(3, 9);
  const progressionArray = getProgression(firstItem, step);
  const missedNumberIndex = utils.getRandom(0, 10);
  const answer = progressionArray[missedNumberIndex];
  progressionArray[missedNumberIndex] = '..';
  const question = progressionArray.join(' ');
  return [question, answer];
};
const gameRules = 'What number is missing in the progression?';
export default () => brainGame(gameRules, getRandomProgression);
