const generatePositiveRandom = function(leftRange, rightRange) {
  if (leftRange < 0 || rightRange < 0) {
    throw new RangeError('Данные некорректны, границы диапазона не должны быть отрицательнцми числами');
  }
  if (leftRange === rightRange) {
    return leftRange;
  }
  const maxValue = Math.max(leftRange, rightRange);
  const minValue = Math.min(leftRange, rightRange);
  return Math.floor(Math.random() * (maxValue - (minValue - 1))) + minValue;
};

const getRandomFromArray = function (array) {
  return array[generatePositiveRandom(0, array.length - 1)];
};

const checkCommentLength = function (comment, permissibleLength) {
  return (comment.length <= permissibleLength);
};
checkCommentLength('Hello World!', 5);

export {generatePositiveRandom, getRandomFromArray};
