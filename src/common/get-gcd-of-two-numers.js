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
  const smaller = Math.min(a, b);

  if (greater % smaller === 0) {
    return smaller;
  }
  while (greater > smaller) {
    greater -= smaller;
    if (greater % smaller === 0) {
      return smaller;
    }
  }
  return 1;
}

export default getGcdOfTwoNumbers;
