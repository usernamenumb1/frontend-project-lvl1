import brainGame from '../index.js';
import utils from '../utils.js';

const isEven = (int) => int % 2 === 0;

const getRandomEven = () => {
  const question = utils.getRandom();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
export default () => brainGame(gameRules, getRandomEven);
