/**
 * Функция для получения случайного целого числа в заданном диапозоне
 * @param {number} min начало диапозона, включительно
 * @param {number} max конец диапозоне, включительно
 * @returns {number} случайное целое число
 */
function getRandomNumber(min, max) {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
}

export default getRandomNumber;
