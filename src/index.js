import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {Settings, questions} from './mocks/questions.js';

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
