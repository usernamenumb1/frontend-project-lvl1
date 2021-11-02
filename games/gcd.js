import { greeting, isCorrect, getAnswer, getRandomPair, gcd } from '../src/index.js';

const brainGcd = () => {
  let count = 0;
  let name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  while (count < 3) {
    const pair = getRandomPair();
    const correctans = gcd(pair);
    const answer = getAnswer(pair);
    if (isCorrect(correctans, answer)) {
        count += 1;
        console.log('Correct!');
      } else {
        count = 0;
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctans}.\nLet's try again, ${name}!`);
      }
  }
}

export default brainGcd;