/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import ConfigureStore from './store/ConfigureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './components/App';

import './style/MovieDB.less';

//External libraries
//This is how you would do it but not using this as it requires jquery
//import '../node_modules/bootstrap/dist/js/bootstrap.min';
//Consider
//https://react-bootstrap.github.io/introduction.html
const store = ConfigureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
