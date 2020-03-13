import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {App} from './app.jsx';
import NameSpace from '../../reducer/name-space.js';
import {AuthorizationStatus} from '../../reducer/user/user.js';

const mockStore = configureStore([]);

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/1`,
      artist: `John Snow`,
    }, {
      picture: `https://api.adorable.io/avatars/128/2`,
      artist: `Jack Daniels`,
    }, {
      picture: `https://api.adorable.io/avatars/128/3`,
      artist: `Jim Beam`,
    }],
  },
];

describe(`App should render correctly`, () => {
  it(`WelcomeScreen should render correctly`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 0
      }
    });

    const tree = renderer
      .create(<Provider store={store}>
        <App
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          login={() => {}}
          maxMistakes={3}
          questions={questions}
          onUserAnswer={() => {}}
          onWelcomeButtonClick={() => {}}
          step={-1}
          mistakes={0}
          resetGame={() => {}}
        />
      </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`GenreQuestionScreen should render correctly`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3
      }
    });

    const tree = renderer
      .create(<Provider store={store}>
        <App
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          login={() => {}}
          maxMistakes={3}
          questions={questions}
          onUserAnswer={() => {}}
          onWelcomeButtonClick={() => {}}
          step={0}
          mistakes={0}
          resetGame={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`ArtistQuestionScreen should render correctly`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3
      }
    });

    const tree = renderer
      .create(<Provider store={store}>
        <App
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          login={() => {}}
          maxMistakes={3}
          questions={questions}
          onUserAnswer={() => {}}
          onWelcomeButtonClick={() => {}}
          step={1}
          mistakes={0}
          resetGame={() => {}}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render GameOverScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={() => {}}
              maxMistakes={3}
              mistakes={3}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              step={1}
              resetGame={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render WinScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.AUTH}
              login={() => {}}
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              step={3}
              resetGame={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render AuthScreen`, () => {
    const store = mockStore({
      [NameSpace.GAME]: {
        mistakes: 3
      }
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              login={() => {}}
              maxMistakes={3}
              mistakes={0}
              questions={questions}
              onUserAnswer={() => {}}
              onWelcomeButtonClick={() => {}}
              step={3}
              resetGame={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
