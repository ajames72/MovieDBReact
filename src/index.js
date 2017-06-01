import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import ConfigureStore from './store/ConfigureStore';
import { loadTMDBApiConfiguration, loadLanguageOptions, loadCountryOptions } from './actions/SearchActions';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/MovieDB.less';

//External libraries
//This is how you would do it but not using this as it requires jquery
//import '../node_modules/bootstrap/dist/js/bootstrap.min';
//Consider
//https://react-bootstrap.github.io/introduction.html
const store = ConfigureStore();

//Should go in the component?
store.dispatch(loadTMDBApiConfiguration());
store.dispatch(loadLanguageOptions());
store.dispatch(loadCountryOptions());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
