import * as types from '../actions/ActionTypes';

/**
 * @description
 * @param {array} state -
 * @param {string} action - action type SET_SECTION_TITLE
 * @returns {array}
 **/
export default function SectionTitleReducer(state = {}, action){
  switch(action.type) {
    case types.SET_SECTION_ATTRIBUTES:
      return action.sectionAttrs;
    default:
      return state;
  }
}
