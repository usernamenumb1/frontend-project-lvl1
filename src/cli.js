import readlineSync from 'readline-sync';

export const sayHello = () => {
    const name = readlineSync.question('May I have your name? '); 
    return console.log(`Hello, ${name}!`);
}