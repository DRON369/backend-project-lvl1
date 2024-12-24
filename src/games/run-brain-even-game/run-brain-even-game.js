import getRandomNumber from '../../common/generate-random-number.js';
import runGame from '../../index.js';

const getRoundData = () => {
  const number = getRandomNumber(1, 100);

  const question = `Question: ${number}`;
  const answer = number % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

const isAnswerCorrect = (answer, userAnswer) => answer === userAnswer;

function runBrainEvenGame() {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

  runGame(gameCondition, getRoundData, isAnswerCorrect);
}

export default runBrainEvenGame;
