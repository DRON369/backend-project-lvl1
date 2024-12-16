import readlineSync from 'readline-sync';
import { GAME_CONDITION, ROUNDS_COUNT } from './constants.js';
import getRandomNumber from '../common/generate-random-number.js';

function brainEven(username) {
  console.log(GAME_CONDITION);
  let score = 0;
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const number = getRandomNumber(1, 100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (['yes', 'no'].includes(answer) && answer === correctAnswer) {
      score += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      break;
    }
  }
  if (score === ROUNDS_COUNT) {
    console.log(`Congratulations, ${username}!`);
  }
}

export default brainEven;
