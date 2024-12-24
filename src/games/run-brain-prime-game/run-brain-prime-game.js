import getRandomNumber from '../../common/generate-random-number.js';
import runGame from '../../index.js';
import isPrimeNumber from '../../common/is-prime-number.js';

const getRoundData = () => {
  const number = getRandomNumber(1, 100);

  const question = `Question: ${number}`;
  const answer = isPrimeNumber(number) ? 'yes' : 'no';

  return [question, answer];
};

const isAnswerCorrect = (answer, userAnswer) => answer === userAnswer;

function runBrainPrimeGame() {
  const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  runGame(gameCondition, getRoundData, isAnswerCorrect);
}

export default runBrainPrimeGame;
