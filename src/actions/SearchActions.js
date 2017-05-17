import * as types from './ActionTypes';
import * as rest from '../client/Client';

export function loadLanguageOptions() {
  return function dispatchLanguageOptions(dispatch) {
    return rest.getISO639_1Codes().then(response => {
      dispatch(loadLanguageOptionsSuccess(response));
    }, error => {

    });
  };
}

export function loadLanguageOptionsSuccess(languages) {
  return {
    type: types.GET_ISO639_1_CODES, languages
  };
}

export function loadCountryOptions() {
  return function dispatchCountryOptions(dispatch) {
    return rest.getISO3166_1Codes().then(response => {
      dispatch(loadCountryOptionsSuccess(response));
    }, error => {

    });
  };
}

export function loadCountryOptionsSuccess(countries) {
  return {
    type: types.GET_ISO3166_1_CODES, countries
  };
}

export function movieSearch(params) {
  return function dispatchMovieSearch(dispatch) {
    return rest.searchMovies(params).then(response => {
      dispatch(movieSearchSuccess(response));
    }, error => {

    });
  };
}

export function movieSearchSuccess(results) {
  return {
    type: types.SEARCH_MOVIES, results
  };
}
