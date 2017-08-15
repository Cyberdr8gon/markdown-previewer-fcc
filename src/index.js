import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Store from './store.js';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


const compileMarkdown = (userInput) => {
  Store.dispatch({
    type: "COMPILE",
    payload: {
      userInput: userInput,
    }
  });
};

compileMarkdown();

ReactDOM.render(
  <Provider store={Store}>
    <App compileMarkdown={compileMarkdown} />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
