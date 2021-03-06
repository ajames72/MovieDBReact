import * as types from './ActionTypes';
import * as rest from '../client/Client';

function getPosterAndTitle(response, posterField, titleField) {
  return response.results.reduce((filteredResults, currentResult, index) => {
    filteredResults[index] = {
      poster_path: currentResult[posterField],
      original_title: currentResult[titleField]
    };

    return filteredResults;
  }, []);
}

export function loadTMDBApiConfiguration() {
  //Thunk - returns a function instead of an action
  return function dispatchTMDBApiConfiguration(dispatch) {
    //Thunk body
    return rest.getTMDBApiConfiguration().then((response) => {
      dispatch(loadTMDBApiConfigurationSuccess(response));
    }, (error) => {
      
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
    return rest.getISO639_1Codes().then((response) => {
      dispatch(loadLanguageOptionsSuccess(response));
    }, (error) => {

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
    return rest.getISO3166_1Codes().then((response) => {
      dispatch(loadCountryOptionsSuccess(response));
    }, (error) => {

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
    return rest.searchMovies(params).then((response) => {
      //Filter the data and keep only what we need in the store
      let searchResults = getPosterAndTitle(response, 'poster_path', 'original_title');
      dispatch(movieSearchSuccess(Object.assign({}, {results: searchResults})));
    }, (error) => {

    });
  };
}

export function movieSearchSuccess(results) {
  return {
    type: types.SEARCH_MOVIES, results
  };
}

export function peopleSearch(params) {
  return function dispatchPeopleSearch(dispatch) {
    return rest.searchPeople(params).then((response) => {
      let searchResults = getPosterAndTitle(response, 'profile_path', 'name');
      dispatch(peopleSearchSuccess(Object.assign({}, {results: searchResults})));
    }, (error) => {

    });
  };
}

export function peopleSearchSuccess(results) {
  return {
    type: types.SEARCH_PEOPLE, results
  };
}

export function tvShowSearch(params) {
  return function dispatchTVShowSearch(dispatch) {
    return rest.searchTVShows(params).then((response) => {
      let searchResults = getPosterAndTitle(response, 'poster_path', 'original_name');
      dispatch(tvShowSearchSuccess(Object.assign({}, {results: searchResults})));
    }, (error) => {

    });
  };
}

export function tvShowSearchSuccess(results) {
  return {
    type: types.SEARCH_TVSHOWS, results
  };
}

export function collectionSearch(params) {
  return function dispatchCollectionSearch(dispatch) {
    return rest.searchCollections(params).then((response) => {
      let searchResults = getPosterAndTitle(response, 'poster_path', 'name');
      dispatch(collectionSearchSuccess(Object.assign({}, {results: searchResults})));
    }, (error) => {

    });
  };
}

export function collectionSearchSuccess(results) {
  return {
    type: types.SEARCH_COLLECTIONS, results
  };
}

export function setSectionAttributes(sectionAttrs) {
  return {
    type: types.SET_SECTION_ATTRIBUTES, sectionAttrs
  };
}

export function clearSearchResults() {
  const results = {
    results: []
  };

  return {
    type: types.CLEAR_SEARCH_RESULTS, results
  };
}
