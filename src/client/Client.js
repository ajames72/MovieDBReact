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
 * @description -
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
 * @description -
 * @param none
 * @returns {object} - ISO3166_1 country codes
 */
export function getISO3166_1Codes() {
  let config = Config.getISO3166_1CodeSrc();
  console.log(config);
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
