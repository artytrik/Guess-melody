import NameSpace from '../name-space';

export const getQuestions = (state) => {
  return state[NameSpace.DATA].questions;
};
