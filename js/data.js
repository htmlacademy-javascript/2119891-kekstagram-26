import {generatePositiveRandom, getRandomFromArray} from './util.js';

const MAX_COMMENTS_COUNT = 10;
const PICTURES_COUNT = 25;

const messages = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const names = ['Порфирий', 'Евстратий', 'Глафира', 'Иннокентий'];

let commentId = 1;
const generateSomeComments = function() {
  const comments = [];
  for (let i = 0; i < generatePositiveRandom(1, MAX_COMMENTS_COUNT); i++) {
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

const getPictures = function() {
  const pictures = [];
  for (let i = 0; i < PICTURES_COUNT; i++) {
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
  return pictures;
};

export {getPictures};
