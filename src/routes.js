import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as path from './RoutePaths';
import App from './components/App';
import HomePage from './components/home/HomePage';
import MoviePage from './components/search/movies/MoviePage';
import CollectionPage from './components/search/collections/CollectionPage';
import PeoplePage from './components/search/people/PeoplePage';
import TVShowsPage from './components/search/tvshows/TVShowsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path={path.ROUTE_PATH_MOVIES} component={MoviePage} />
    <Route path={path.ROUTE_PATH_COLLECTIONS} component={CollectionPage} />
    <Route path={path.ROUTE_PATH_PEOPLE} component={PeoplePage} />
    <Route path={path.ROUTE_PATH_TVSHOWS} component={TVShowsPage} />
  </Route>
);
