import { greeting, isCorrect, getAnswer } from '../src/index.js';

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
  const res = [arr.join(' '), missint];
  return res;
};

const brainProg = () => {
  let count = 0;
  const name = greeting();
  console.log('What number is missing in the progression?');
  while (count < 3) {
    const prog = getRandomProg();
    const correctans = prog[1];
    const answer = getAnswer(prog[0]);
    if (isCorrect(correctans, answer)) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctans}.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) console.log(`Congratulations, ${name}!`);
};

export default brainProg;
