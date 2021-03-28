const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(element => element.forEach(a => a == '^^' ? count++ : count))
  return count
  throw new CustomError('Not implemented');
  
};
