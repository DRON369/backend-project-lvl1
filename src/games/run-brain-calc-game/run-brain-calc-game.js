import getRandomNumber from '../../common/generate-random-number.js';
import runGame from '../../index.js';

const getRoundData = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);

  const question = `Question: ${firstNumber} + ${secondNumber}`;
  const answer = firstNumber + secondNumber;

  return [question, answer.toString()];
};

const isAnswerCorrect = (answer, userAnswer) => +answer === +userAnswer;

function runBrainCalcGame() {
  const gameCondition = 'What is the result of the expression?';

  runGame(gameCondition, getRoundData, isAnswerCorrect);
}

export default runBrainCalcGame;
