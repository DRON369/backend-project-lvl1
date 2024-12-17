/**
 * Функция для нахождения НОД двух целых чисел
 * @param {number} a Первое числов
 * @param {number} b Второе число
 * @returns {number} НОД заданных чисел
 */
function getGcdOfTwoNumbers(a, b) {
  if (a === b) {
    return a;
  }
  let greater = Math.max(a, b);
  let smaller = Math.min(a, b);

  if (greater % smaller === 0) {
    return smaller;
  }
  while (greater > smaller) {
    const remainder = greater % smaller;
    if (remainder === 0) {
      return smaller;
    }
    greater = smaller;
    smaller = remainder;
  }
  return 1;
}

export default getGcdOfTwoNumbers;
