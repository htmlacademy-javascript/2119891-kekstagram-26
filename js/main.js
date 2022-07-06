let generateRandom = function(min, max) {
  if (min < 0 && max >= min) {
    return 0;
  }
  if (min > max) {
    return NaN;
  }
  if (min === max) {
    return min;
  }
  return Math.floor(Math.random() * (max - (min - 1))) + min;
};
generateRandom(6, 66);

let checkCommentLength = function (comment, permissibleLength) {
  return (comment.length <= permissibleLength);
};
checkCommentLength('Hello World!', 5);

