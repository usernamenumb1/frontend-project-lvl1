import { greeting, isCorrect, getAnswer } from '../src/index.js';

const getRandom = () => Math.floor(Math.random() * 100);

const isEven = (int) => ((int % 2 === 0) ? 'yes' : 'no');

const brainEven = () => {
  let count = 0;
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const random = getRandom();
    const answer = getAnswer(random);
    const correctans = isEven(random);
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

export default brainEven;
