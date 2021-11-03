import readlineSync from 'readline-sync';

export const isEven = (int) => ((int % 2 === 0) ? 'yes' : 'no');

export const isCorrect = (corrans, ans) => ((String(corrans) === ans) ? ans : !ans);

export const getRandom = () => Math.floor(Math.random() * 30);

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
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const solution = (exp) => {
  const arr = exp.split(' ');
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

export const gcd = (pair) => {
  const arr = pair.split(' ').sort();
  const [r1, r2] = arr;
  const temp = [1];
  let n = 1;
  while (n <= r1) {
    if (r1 % n === 0 && r2 % n === 0) {
      if (!temp.includes(n)) temp.push(n);
      n += 1;
    } else n += 1;
  }
  return temp[temp.length - 1];
};

export const getRandomPair = () => {
  let random1 = getRandom();
  let random2 = getRandom();
  let isgcd = gcd(`${random1} ${random2}`);
  while (isgcd === 1) {
    random1 = getRandom();
    random2 = getRandom();
    isgcd = gcd(`${random1} ${random2}`);
  }
  return `${random1} ${random2}`;
};
