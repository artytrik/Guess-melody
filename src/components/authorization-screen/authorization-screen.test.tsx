import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AuthorizationScreen from './authorization-screen';
import {noop} from '../../utils';

it(`AuthorizationScreen is rendered correctly`, () => {
  const tree = renderer.create((
    <AuthorizationScreen
      onReplayButtonClick={noop}
      onSubmit={noop}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
