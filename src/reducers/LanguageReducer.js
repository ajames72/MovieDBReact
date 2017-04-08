import * as types from '../actions/ActionTypes';

export default function LanguageReducer(state = [], action){
  switch(action.type) {
    case types.GET_ISO639_1_CODES:
      return action.languages;
    default:
      return state;
  }
}
