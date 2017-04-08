import expect from 'expect';
import LanguageReducer from './LanguageReducer';
import * as types from '../actions/ActionTypes';
import * as SearchActions from '../actions/SearchActions';

const initialState = [];

const languages = [
  {
    "alpha2": "de",
    "English": "German"
  }
];

describe('LanguageReducer', () => {
  it('should return the initial state', () => {
    expect(LanguageReducer(initialState, {})).toEqual(initialState);
  });

  it('should create languages when passed GET_ISO639_1_CODES action', () => {
    const action = SearchActions.loadLanguageOptionsSuccess(languages);
    expect(LanguageReducer(initialState, action)).toEqual(languages);
  });
});
