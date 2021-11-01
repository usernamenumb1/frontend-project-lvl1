import readlineSync from 'readline-sync';

export const isEven = (int) => (int % 2 === 0) ? 'yes' : 'no';

export const isCorrect = (corrans, ans) => (String(corrans) === ans) ? true : false;

export const getRandom = () => Math.floor(Math.random() * 40);

export const getRandomExp = () => {
  const expressions = '+-*';
  const symbol = expressions.charAt(Math.floor(Math.random() * expressions.length));
  const random1 = getRandom();
  const random2 = getRandom();
  return `${random1} ${symbol} ${random2}`;
};

export const greeting = () => {
  console.log('Welcome to the Brain Games');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getAnswer = (a) => {
  console.log(`Question: ${a}`);
  let answer = readlineSync.question('Your answer:');
  return answer;
}

export const isCalc = (exp) => {
  let arr = exp.split(' ');
  const [r1, e, r2] = arr;
  let result = 0;
  switch (e) {
    case '+':
      result = Number(r1) + Number(r2);
      break;
    case '-':
      result = Number(r1) - Number(r2);
      break;
    case '*':
      result = Number(r1) * Number(r2);
      break;
    default:
      break;
  }
  return result;
};
