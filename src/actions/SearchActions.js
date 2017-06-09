import * as types from './ActionTypes';
import * as rest from '../client/Client';

export function loadTMDBApiConfiguration() {
  return function dispatchTMDBApiConfiguration(dispatch) {
    return rest.getTMDBApiConfiguration().then((response) => {
      dispatch(loadTMDBApiConfigurationSuccess(response));
    });
  };
}

export function loadTMDBApiConfigurationSuccess(config) {
  return {
    type: types.GET_TMDB_CONFIGURATION, config
  };
}

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
      //Filter the data and keep only what we need in the store
      let searchResults = response.results.reduce((filteredResults, currentResult, index) => {
        filteredResults[index] = {
          poster_path: currentResult['poster_path'],
          original_title: currentResult['original_title']
        };

        return filteredResults;
      }, []);

      dispatch(movieSearchSuccess(Object.assign({}, {results: searchResults})));
    }, error => {

    });
  };
}

export function movieSearchSuccess(results) {
  return {
    type: types.SEARCH_MOVIES, results
  };
}
