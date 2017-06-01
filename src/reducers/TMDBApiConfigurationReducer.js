import * as types from '../actions/ActionTypes';

const initialState = {
  images: {
    base_url: '',
    poster_sizes: [
      "w92"
    ]
  }
}
/**
 * @description Movie Search API configuration Reducer
 * @param {object} state - response from the /configuration resource
 * @param {string} action - action type GET_TMDB_CONFIGURATION
 * @returns {object}
 * @TODO filter configuration to store only necessary properties
 **/
export default function TMDBApiConfigurationReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_TMDB_CONFIGURATION:
      return action.config;
    default:
      return state;
  }
}
