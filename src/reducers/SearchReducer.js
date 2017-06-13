import * as types from '../actions/ActionTypes';

const initialState = {
  results: []
};

/**
 * @description Search Reducer handles search results state
 * @param {object} state - response from the /search/* resources
 * @param {string} action - action type
 * @returns {object}
 **/
export default function SearchReducer(state = initialState, action) {
  switch(action.type) {
    case types.SEARCH_MOVIES:
      return action.results;
    case types.SEARCH_PEOPLE:
      return action.results;
    default:
      return state;
  }
}
