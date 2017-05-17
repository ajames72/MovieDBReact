import * as types from '../actions/ActionTypes';

export default function MovieSearchReducer(state = [], action) {
  switch(action.type) {
    case types.SEARCH_MOVIES:
      return action.results;
    default:
      return state;
  }
}
