import * as types from './ActionTypes';
import * as rest from '../client/Client';

export function loadLanguageOptions() {
  return function(dispatch) {
    return rest.getISO639_1Codes().then(response => {
      dispatch(loadLanguageOptionsSuccess(response));
    });
  };
}

export function loadLanguageOptionsSuccess(languages) {
  return {
    type: types.GET_ISO639_1_CODES, languages
  };
}
