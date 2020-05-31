import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <header>
    </header>
    <body>
      <App />
    </body>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
