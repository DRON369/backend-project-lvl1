// import readlineSync from 'readline-sync';
import getRandomNumber from '../../common/generate-random-number.js';
import greeting from '../../../bin/cli.js';
import runGame from '../../index.js';
import getGcdOfTwoNumbers from '../../common/get-gcd-of-two-numers.js';

const getRoundData = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 20);

  const answer = getGcdOfTwoNumbers(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;

  return [question, answer.toString()];
};

const isAnswerCorrect = (answer, userAnswer) => +answer === +userAnswer;

function brainGcdGame() {
  const username = greeting();
  const gameCondition = 'Find the greatest common divisor of given numbers.';

  console.log(gameCondition);
  runGame(username, getRoundData, isAnswerCorrect);
}

export default brainGcdGame;
