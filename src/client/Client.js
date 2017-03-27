import fetch from 'isomorphic-fetch';
import Config from '../config/Config';

export function getISO639_1Codes() {
  let config = Config.getISO639_1CodeSrc();

  return fetch(config.url, {method: config.method}).then(function(response) {
    switch(response.status) {
      case 200:
        return response.json();
      default:
        return [
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
    }
  });
}

export function getISO3166_1Codes() {

}
