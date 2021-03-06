/**
 * @file Movie Database REST API endpoint configuration
 * @description Helper functions to get the settings for the Movie Database REST API endpoints. Each function returns the appropriate URL (DEV, Test, Prod) and the HTTP Request Method.
 * @author Andrew James
 * @version 0.1
 */
/*eslint-disable import/default*/
import environment from '../environments/environment';

"use strict";

//Private properties
const API_KEY = 'df3908a9e93ea4fa095429a46c0eec66';

//------------------------------------------------//
// We're using named function expressions here§   //
// https://github.com/airbnb/javascript#functions //
//------------------------------------------------//

const Config = {
  /**
   * @description - configuration for the /search/movie API resource
   * @param none
   * @returns {object} - the URL and HTTP Request Method
   */
  getMovieSearchAPI: function getMovieSearchAPI() {
    return {
      url: environment.endpoints.MOVIE_SEARCH_API + API_KEY,
      method: "GET"
    };
  },
  /**
   * @description - configuration for the /search/person API resource
   * @param none
   * @returns {object} - the URL and HTTP Request Method
   */
  getPeopleSearchAPI: function getPeopleSearchAPI() {
    return {
      url: environment.endpoints.PEOPLE_SEARCH_API + API_KEY,
      method: "GET"
    };
  },
  /**
   * @description - configuration for the /search/tv API resource
   * @param none
   * @returns {object} - the URL and HTTP Request Method
   */
  getTVShowSearchAPI: function getTVShowSearchAPI() {
    return {
      url: environment.endpoints.TVSHOW_SEARCH_API + API_KEY,
      method: "GET"
    };
  },
  /**
   * @description - configuration for the /search/collection API resource
   * @param none
   * @returns {object} - the URL and HTTP Request Method
   */
  getCollectionSearchAPI: function getCollectionSearchAPI() {
    return {
      url: environment.endpoints.COLLECTION_SEARCH_API + API_KEY,
      method: "GET"
    };
  },
  /**
   * @description - configuration for the /configuration API resource
   * @param none
   * @returns {object} - the URL and HTTP Request Method
   */
  getTMDBApiConfiguration: function getTMDBApiConfiguration() {
    return {
      url: environment.endpoints.TMDB_CONFIGURATION_API + API_KEY,
      method: "GET"
    };
  },
  /**
   * @description - configuration for the resourse to get the ISO 639-1 Language Codes and IETF Language Types
   * @param none
   * @returns {object} - the URL and HTTP Request Method
   */
  getISO639_1CodeSrc: function getISO639_1CodeSrc() {
    return {
      url: environment.endpoints.ISO639_1_SRC,
      method: "GET"
    };
  },
  /**
   * @description - configuration for the resourse to get the ISO 3166-1-alpha-2 English country names and code elements
   * @param none
   * @returns {object} - the URL and HTTP Request Method
   */
  getISO3166_1CodeSrc: function getISO3166_1CodeSrc() {
    return {
      url: environment.endpoints.ISO3166_1_SRC,
      method: "GET"
    };
  }
};

//module.exports = Config;
export default Config;
