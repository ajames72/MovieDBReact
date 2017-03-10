import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './components/App';

//import '../node_modules/bootstrap/less/bootstrap.less';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/MovieDB.less';

//External libraries
//This is how you would do it but not using this as it requires jquery
//import '../node_modules/bootstrap/dist/js/bootstrap.min';
//Consider
//https://react-bootstrap.github.io/introduction.html

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
