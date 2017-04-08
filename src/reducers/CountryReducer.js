import * as types from '../actions/ActionTypes';

export default function CountryReducer(state = [], action){
  switch(action.type) {
    case types.GET_ISO3166_1_CODES:
      return action.countries;
    default:
      return state;
  }
}
