import getRandomNumber from '../../common/generate-random-number.js';
import greeting from '../../../bin/cli.js';
import runGame from '../../index.js';

const getRoundData = () => {
  const number = getRandomNumber(1, 100);

  const question = `Question: ${number}`;
  const answer = number % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

const isAnswerCorrect = (answer, userAnswer) => answer === userAnswer;

function brainEvenGame() {
  const username = greeting();
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

  console.log(gameCondition);
  runGame(username, getRoundData, isAnswerCorrect);
}

export default brainEvenGame;
