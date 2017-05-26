import * as types from '../actions/ActionTypes';
/* Bad Bad Bad, merges results */
export default function SearchReducer(state = [], action){
  switch(action.type) {
    case types.GET_ISO639_1_CODES:
      return action.languages;
    case types.GET_ISO3166_1_CODES:
      return action.countries;
    default:
      return state;
  }
}
