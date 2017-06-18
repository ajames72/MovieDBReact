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
  // @TODO: fix comment pattern for eslint
  // http://eslint.org/docs/rules/no-fallthrough
  //
  //
  //-------------------------------------------------------------------//
  // 2 ways to do this
  // We could include types.SET_SECTION_ATTRIBUTES
  // 1 action does 2 functions: Set attributes and clear search results
  //-------------------------------------------------------------------//
  switch(action.type) {
    case types.SEARCH_MOVIES:
    case types.SEARCH_PEOPLE:
    case types.SEARCH_TVSHOWS:
    case types.CLEAR_SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
}
