// import readlineSync from 'readline-sync';
import getRandomNumber from '../../common/generate-random-number.js';
import greeting from '../../../bin/cli.js';
import runGame from '../../index.js';

const getRoundData = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);

  const question = `Question: ${firstNumber} + ${secondNumber}`;
  const answer = firstNumber + secondNumber;

  return [question, answer.toString()];
};

const isAnswerCorrect = (answer, userAnser) => +answer === +userAnser;

function brainCalcGame() {
  const username = greeting();
  const gameCondition = 'What is the result of the expression?';

  console.log(gameCondition);
  runGame(username, getRoundData, isAnswerCorrect);
}

export default brainCalcGame;
