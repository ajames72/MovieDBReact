import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as path from './RoutePaths';
import App from './components/App';
import HomePage from './components/home/HomePage';
import MoviePage from './components/movies/MoviePage';
import PeoplePage from './components/people/PeoplePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path={path.ROUTE_PATH_MOVIES} component={MoviePage} />
    <Route path={path.ROUTE_PATH_PEOPLE} component={PeoplePage} />
  </Route>
);
