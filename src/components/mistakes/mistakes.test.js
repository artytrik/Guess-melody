import React from 'react';
import renderer from 'react-test-renderer';
import Mistakes from './mistakes.jsx';

it(`Mistakes should render correctly`, () => {
  const tree = renderer.create((
    <Mistakes
      count={1}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
