function solveEquation(a, b, c) {
 
  'use strict';
  let D = b ** 2 - 4 * a * c;
  let arr = [];

  if (D > 0) {
    arr[0] = -b + Math.sqrt(D) / (2 * a);
    arr[1] = -b - Math.sqrt(D) / (2 * a);
  } else if (D === 0) {
    arr[0] = -b + Math.sqrt(D) / (2 * a);
  } 

  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
