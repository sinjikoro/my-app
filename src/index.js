import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Container maxWidth='xl'>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
