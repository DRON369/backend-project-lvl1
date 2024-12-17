import getRandomNumber from './generate-random-number.js';

/**
 * Функция для получении числовой прогрессии
 * @param {number} size размер прогрессии (по умолчанию 10)
 * @returns {number []} массив, с элементами програссии
 */
function generateProgression(size = 10) {
  const step = getRandomNumber(1, 10);
  const progression = [step];
  for (let i = 1; i < size; i += 1) {
    progression.push(progression[i - 1] + step);
  }
  return progression;
}

export default generateProgression;
