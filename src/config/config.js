/**
 * @file Movie Database REST API endpoint configuration
 * @description Functions to get the settings for the Movie Database REST API endpoints. This class could be used to get environment variables i.e. Dev, Q.A, Production
 * @author Andrew James
 * @version 0.1
 */

import environment from '../environments/environment';

"use strict";

//Private properties
const API_KEY = "df3908a9e93ea4fa095429a46c0eec66";

const Config = {
  /**
   * @description - configuration for the /search/movie API resource
   * @param none
   * @returns {object} - the URL and HTTP Method
   */
  getSearchAPI: function() {
    return {
      url: environment.endpoints.SEARCH_API + API_KEY + "&query=",
      method: "GET"
    };
  },
  /**
   * @description - configuration for the /configuration API resource
   * @param none
   * @returns {object} - the URL and HTTP Method
   */
  getTMDBConfigurationAPI: function() {
    return {
      url: environment.endpoints.CONFIGURATION_API + API_KEY,
      method: "GET"
    };
  },
  /**
   * @description
   * @type {object}
   */
  TMDbConfiguration: undefined,
  /**
   * @description - configuration for the resourse to get the ISO 639-1 Language Codes and IETF Language Types
   * @param none
   * @returns {object} - the URL and HTTP Method
   */
  getISO639_1CodeSrc: function() {
    return {
      url: environment.endpoints.ISO639_1_SRC,
      method: "GET"
    };
  },
  /**
   * @description - configuration for the resourse to get the ISO 3166-1-alpha-2 English country names and code elements
   * @param none
   * @returns {object} - the URL and HTTP Method
   */
  getISO3166_1CodeSrc: function() {
    return {
      url: environment.endpoints.ISO3166_1_SRC,
      method: "GET"
    };
  }
};

//module.exports = Config;
export default Config;
