import * as types from '../actions/ActionTypes';

/**
 * @description Country Code Reducer
 * @param {array} state - response from the ISO3166_1 Country Code resource
 * @param {string} action - action type GET_ISO3166_1_CODES
 * @returns {array}
 **/
export default function CountryReducer(state = [], action){
  switch(action.type) {
    case types.GET_ISO3166_1_CODES:
      return action.countries;
    default:
      return state;
  }
}
