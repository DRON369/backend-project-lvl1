import readlineSync from 'readline-sync';
import ROUNDS_COUNT from './constants.js';

function runGame(username, getRoundData, isAnswerCorrect) {
  let score = 0;
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, answer] = getRoundData();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (isAnswerCorrect(answer, userAnswer)) {
      score += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${username}!`);
      break;
    }
  }
  if (score === ROUNDS_COUNT) {
    console.log(`Congratulations, ${username}!`);
  }
}

export default runGame;
