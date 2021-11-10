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

export { isCorrect, greeting, getAnswer };
