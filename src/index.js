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

export default (gameRules, getExpression) => {
  const name = greeting();
  if (gameRules && getExpression) {
    console.log(gameRules);
    for (let i = 0; i < 3; i += 1) {
      const expression = getExpression();
      const answer = getAnswer(expression[0]);
      const correctAnswer = expression[1];
      if (!isCorrect(correctAnswer, answer)) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
        break;
      }
      console.log('Correct!');
      if (i === 2) console.log(`Congratulations, ${name}!`);
    }
  }
};
