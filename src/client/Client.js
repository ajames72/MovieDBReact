/**
 * @file Movie Database REST Client
 * @description Functions to call Movie Database RESTful endpoints
 * @author Andrew James
 * @version 0.1
 */
import fetch from 'isomorphic-fetch';
import Config from '../config/Config';

const defaultLanguages = [
        {
          "alpha2": "de",
          "English": "German"
        },
        {
          "alpha2": "en",
          "English": "English"
        },
        {
          "alpha2": "es",
          "English": "Spanish; Castilian"
        },
        {
          "alpha2": "fr",
          "English": "French"
        },
        {
          "alpha2": "ja",
          "English": "Japanese"
        },
        {
          "alpha2": "ru",
          "English": "Russian"
        },
        {
          "alpha2": "tl",
          "English": "Tagalog"
        },
        {
          "alpha2": "zh",
          "English": "Chinese"
        }
      ];

const defaultCountries = [
  {
    "Name": "Germany",
    "Code": "DE"
  },
  {
    "Name": "United Kingdom",
    "Code": "GB"
  },
  {
    "Name": "United States",
    "Code": "US"
  },
  {
    "Name": "China",
    "Code": "CN"
  }
];
/**
 * @description - Gets a list of ISO639_1 language codes
 * @param none
 * @returns {object} - ISO639_1 language codes
 */
export function getISO639_1Codes() {
  let config = Config.getISO639_1CodeSrc();

  return fetch(config.url, {method: config.method}).then((response) => {
    switch(response.status) {
      case 200:
        return response.json();
      default:
        return defaultLanguages;
    }
  }).catch((error) => {
    return defaultLanguages;
  });
}
/**
 * @description - Gets a list of ISO3166_1 country codes
 * @param none
 * @returns {object} - ISO3166_1 country codes
 */
export function getISO3166_1Codes() {
  let config = Config.getISO3166_1CodeSrc();

  return fetch(config.url, {method: config.method}).then((response) => {
    switch(response.status) {
      case 200:
        return response.json();
      default:
        return defaultCountries;
    }
  }).catch((error) => {
    return defaultCountries;
  });
}

/**
 * @description - private helper function that validates whether a key/value pair should be used in the search parameter string
 * @param {string} key - parameter key
 * @param {string} value - parameter value
 * @returns {boolean} - true if the key/value can be used in the parameter string
 */
function validParam(key, value) {

  if(
    (!value) ||
    (value.length === 0) ||
    ((key === 'language') && (value === 'any')) ||
    ((key === 'region') && (value === 'any'))
  ) {
    return false;
  }

  return true;
}

export function setSearchMoviesParamString(params) {

  let paramStr = '';

  Object.keys(params).map((key, index) => {
    if(Object.prototype.hasOwnProperty.call(params,key) && validParam(key, params[key])) {
        paramStr += `&${key}=${encodeURI(params[key])}`;
    }
  });

  return paramStr;
}

export function searchTMDB(config, params) {
  let myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json');

  let requestString = setSearchMoviesParamString(params);

  let url = config.url.concat(requestString);

  return fetch(url, {method: config.method, headers: myHeaders}).then((response) => {
    switch (response.status) {
      case 200:
        return response.json();
      case 401:
      case 404:
      case 422:
      default:
        return {status: response.status, errorResponse: JSON.parse(response)};

    }
  }).catch((error) => {

  });
}

export function searchMovies(params) {
  return searchTMDB(Config.getMovieSearchAPI(), params);
}

export function searchPeople(params) {
  return searchTMDB(Config.getPeopleSearchAPI(), params);
}

export function getTMDBApiConfiguration() {
  let myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json');

  let config = Config.getTMDBApiConfiguration();

  return fetch(config.url, {method: config.method, headers: myHeaders}).then((response) => {
    switch(response.status) {
      case 200:
        return response.json();
      default:
        return {status: response.status, errorResponse: JSON.parse(response)};
    }
  });
}
