/**
 * Функция проверяет является ли переданное число простым
 * @param {number} num проверяемое число
 * @returns true если число простое, иначе false
 */

function isPrimeNumber(num) {
  let dividers = 0;

  if (num === 1) {
    return true;
  }

  for (let i = 1; i <= num; i += 1) {
    if (dividers > 2) {
      break;
    }
    if (num % i === 0) {
      dividers += 1;
    }
  }
  return dividers === 2;
}

export default isPrimeNumber;
