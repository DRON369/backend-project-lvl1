// import readlineSync from 'readline-sync';
import greeting from '../../../bin/cli.js';
import runGame from '../../index.js';
import generateProgression from '../../common/generate-progression.js';
import getRandomNumber from '../../common/generate-random-number.js';

const getRoundData = () => {
  const progression = generateProgression();
  const secretIndex = getRandomNumber(0, progression.length);
  const answer = progression[secretIndex];
  progression.splice(secretIndex, 1, '..');
  const question = `Question: ${progression.join(' ')}`;

  return [question, answer.toString()];
};

const isAnswerCorrect = (answer, userAnswer) => +answer === +userAnswer;

function brainProgressionGame() {
  const username = greeting();
  const gameCondition = 'What number is missing in the progression?';

  console.log(gameCondition);
  runGame(username, getRoundData, isAnswerCorrect);
}

export default brainProgressionGame;
