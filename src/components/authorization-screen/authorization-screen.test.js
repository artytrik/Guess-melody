import React from 'react';
import renderer from 'react-test-renderer';
import AuthorizationScreen from './authorization-screen.jsx';

it(`AuthorizationScreen is rendered correctly`, () => {
  const tree = renderer.create((
    <AuthorizationScreen
      onReplayButtonClick={() => {}}
      onSubmit={() => {}}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
