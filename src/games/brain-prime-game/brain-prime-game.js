import getRandomNumber from '../../common/generate-random-number.js';
import greeting from '../../../bin/cli.js';
import runGame from '../../index.js';
import isPrimeNumber from '../../common/is-prime-number.js';

const getRoundData = () => {
  const number = getRandomNumber(1, 100);

  const question = `Question: ${number}`;
  const answer = isPrimeNumber(number) ? 'yes' : 'no';

  return [question, answer];
};

const isAnswerCorrect = (answer, userAnswer) => answer === userAnswer;

function brainPrimeGame() {
  const username = greeting();
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  console.log(gameCondition);
  runGame(username, getRoundData, isAnswerCorrect);
}

export default brainPrimeGame;
