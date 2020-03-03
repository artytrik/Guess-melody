import NameSpace from '../name-space.js';

export const getQuestions = (state) => {
  return state[NameSpace.DATA].questions;
};
