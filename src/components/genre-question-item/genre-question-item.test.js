import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionItem from './genre-question-item.jsx';

const answer = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`
};

it(`GenreQuestionItem is rendered correctly`, () => {
  const tree = renderer.create((
    <GenreQuestionItem
      answer={answer}
      id={0}
      onChange={() => {}}
      userAnswer={false}
      renderPlayer={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
