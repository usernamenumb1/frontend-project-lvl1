import readlineSync from 'readline-sync';

const isEven = (int) => {
  if (int % 2 === 0) return 'yes';
  return 'no';
};

const getRandom = () => Math.floor(Math.random() * 40);

const brainEven = () => {
  let count = 0;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const random = getRandom();
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer:');
    if (isEven(random) === answer) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
