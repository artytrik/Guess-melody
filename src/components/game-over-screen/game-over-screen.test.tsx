import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GameOverScreen from './game-over-screen';
import {Router} from 'react-router-dom';
import history from '../../history';
import {noop} from '../../utils';

it(`GameOverScreen is rendered correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <GameOverScreen
          onReplayButtonClick={noop}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
