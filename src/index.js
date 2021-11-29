import readlineSync from 'readline-sync';

const isCorrect = (corrans, ans) => ((String(corrans) === ans) ? ans : !ans);

const greeting = () => {
  console.log('Welcome to the Brain Games');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getAnswer = (a) => {
  console.log(`Question: ${a}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default (gameRules, func) => {
  let count = 0;
  const name = greeting();
  console.log(gameRules);
  while (count < 3) {
    const expr = func();
    const answer = getAnswer(expr[0]);
    const correctans = expr[1];
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
