import * as types from '../actions/ActionTypes';

const initialState = {
  results: []
};

/**
 * @description People Search Reducer
 * @param {object} state - response from the /search/person resource
 * @param {string} action - action type SEARCH_PEOPLE
 * @returns {object}
 **/
export default function PeopleSearchReducer(state = initialState, action) {
  switch(action.type) {
    case types.SEARCH_PEOPLE:
      return action.results;
    default:
      return state;
  }
}
