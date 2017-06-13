import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import MoviePage from './components/movies/MoviePage';
import PeoplePage from './components/people/PeoplePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="movies" component={MoviePage} />
    <Route path="people" component={PeoplePage} />
  </Route>
);
