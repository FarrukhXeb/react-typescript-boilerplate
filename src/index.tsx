import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContainer from './AppContainer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
