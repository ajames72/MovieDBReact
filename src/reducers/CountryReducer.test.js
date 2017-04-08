import expect from 'expect';
import CountryReducer from './CountryReducer';
import * as types from '../actions/ActionTypes';
import * as SearchActions from '../actions/SearchActions';

const initialState = [];

const countries = [
  {
    "Name": "Country_a",
    "Code": "CA"
  }
];

describe('CountryReducer', () => {
  it('should return the initial state', () => {
    expect(CountryReducer(initialState, {})).toEqual(initialState);
  });

  it('should create countries when passed GET_ISO3166_1_CODES action', () => {
    const action = SearchActions.loadCountryOptionsSuccess(countries);
    expect(CountryReducer(initialState, action)).toEqual(countries);
  });
});
