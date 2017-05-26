import * as types from '../actions/ActionTypes';

/**
 * @description Language Reducer
 * @param {array} state - response from the ISO639_1 resource resource
 * @param {string} action - action type GET_ISO639_1_CODES
 * @returns {array}
 **/
export default function LanguageReducer(state = [], action){
  switch(action.type) {
    case types.GET_ISO639_1_CODES:
      return action.languages;
    default:
      return state;
  }
}
