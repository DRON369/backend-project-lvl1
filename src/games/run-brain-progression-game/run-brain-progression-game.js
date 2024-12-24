import runGame from '../../index.js';
import generateProgression from '../../common/generate-progression.js';
import getRandomNumber from '../../common/generate-random-number.js';

const getRoundData = () => {
  const progression = generateProgression();
  const secretIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[secretIndex];
  progression.splice(secretIndex, 1, '..');
  const question = `Question: ${progression.join(' ')}`;

  return [question, answer?.toString()];
};

const isAnswerCorrect = (answer, userAnswer) => +answer === +userAnswer;

function runBrainProgressionGame() {
  const gameCondition = 'What number is missing in the progression?';

  runGame(gameCondition, getRoundData, isAnswerCorrect);
}

export default runBrainProgressionGame;
