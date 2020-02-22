import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {Settings, questions} from './mocks/questions.js';
import {createStore} from 'redux';
import {reducer} from './reducer.js';
import {Provider} from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorsCount={Settings.ERRORS_COUNT}
        questions={questions}
      />
    </Provider>,
    document.querySelector(`#root`)
);
