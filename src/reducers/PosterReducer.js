import * as types from '../actions/ActionTypes';

const initialState = {
  src: '',
  alt: ''
};

export default function PosterReducer(state = initialState, action) {
  switch(action.type) {
    case types.RESULTS_DISPLAY_POSTER:
      return action.posterAttrs;
    default:
      return state;
  }
}
