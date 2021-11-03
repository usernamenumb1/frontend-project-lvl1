import '../src/index.js';

const getRandom = () => Math.floor(Math.random() * 200);

const isPrime = (int) => {
  for (let i = 2; i < Math.sqrt(int) + 1; i += 1) {
    if (int % i === 0) return 'no';
  }
  return 'yes';
};

const brainPrime = () => {
  let count = 0;
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (count < 3) {
    const random = getRandom();
    const correctans = isPrime(random);
    const answer = getAnswer(random);
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

export default brainPrime;
