import * as types from '../actions/ActionTypes';

const initialState = {
  results: []
};

/**
 * @description Movie Search Reducer
 * @param {object} state - response from the /search/movie resource
 * @param {string} action - action type GET_ISO3166_1_CODES
 * @returns {object}
 **/
export default function MovieSearchReducer(state = initialState, action) {
  switch(action.type) {
    case types.SEARCH_MOVIES:
      return action.results;
    default:
      return state;
  }
}
