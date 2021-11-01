import readlineSync from 'readline-sync';
import { getRandom, isEven, greeting, isCorrect, getAnswer } from '../src/index.js';

const brainEven = () => {
  let count = 0;
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const random = getRandom();
    let answer = getAnswer(random);
    const correctans = isEven(random);
    if (isCorrect(correctans, answer)) {
      count += 1;
      console.log('Correct!');
    } else {
      count = 0;
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctans}.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
