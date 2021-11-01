import { getRandom, greeting, getRandomExp, isCalc, isCorrect, getAnswer } from '../src/index.js';

const brainCalc = () => {
  let count = 0;
  let name = greeting();
  console.log('What is the result of the expression?');
  while (count < 3) {
    const exp = getRandomExp();
    let answer = getAnswer(exp);
    const correctans = isCalc(exp);
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

export default brainCalc;
