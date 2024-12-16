import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${username}!`);
  return username;
}

export default greeting;
