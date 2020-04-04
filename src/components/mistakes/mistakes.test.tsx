import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Mistakes from './mistakes';

it(`Mistakes should render correctly`, () => {
  const tree = renderer.create((
    <Mistakes
      count={1}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
