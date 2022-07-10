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

const checkCommentLength = function (comment, permissibleLength) {
  return (comment.length <= permissibleLength);
};
checkCommentLength('Hello World!', 5);

const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const names = ['Порфирий', 'Евстратий', 'Глафира', 'Иннокентий'];

let commentId = 1;

const getRandomFromArray = function (array) {
  return array[generatePositiveRandom(0, array.length - 1)];
};
const maxCommentCount = 10;
const generateSomeComments = function() {
  const comments = [];
  for (let i = 0; i < generatePositiveRandom(1, maxCommentCount); i++) {
    const comment = {
      id: commentId,
      avatar: `img/avatar-${ generatePositiveRandom(1, 6) }.svg`,
      message: getRandomFromArray(messages),
      name: getRandomFromArray(names)
    };
    comments[i] = comment;
    commentId++;
  }
  return comments;
};

const maxPicturesCount = 25;
const pictures = [];
for (let i = 0; i < maxPicturesCount; i++) {
  const strId = i + 1;
  const picture = {
    id: strId,
    ulr: `photos/${  strId  }.jpg`,
    description: `Is description for ${  strId  } photo`,
    likes: generatePositiveRandom(15, 200),
    comments: generateSomeComments()
  };
  pictures[i] = picture;
}
