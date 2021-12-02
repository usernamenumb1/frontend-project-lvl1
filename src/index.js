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
  const name = greeting();
  if (gameRules && func) {
    console.log(gameRules);
    for (let i = 0; i < 3; i += 1) {
      const expr = func();
      const answer = getAnswer(expr[0]);
      const correctans = expr[1];
      if (!isCorrect(correctans, answer)) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctans}.\nLet's try again, ${name}!`);
        break;
      }
      console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!`);
  }
};
