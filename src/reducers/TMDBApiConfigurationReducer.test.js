import expect from 'expect';
import * as types from '../actions/ActionTypes';
import * as SearchActions from '../actions/SearchActions';
import * as TestData from '../../test/TestData';
import TMDBApiConfigurationReducer from './TMDBApiConfigurationReducer';

describe('TMDBApiConfigurationReducer', () => {

  const initialState = { };

  it('should return the initial state', () => {
    expect(TMDBApiConfigurationReducer(initialState, {})).toEqual(initialState);
  });

  it('should create the TMDB API Configuration when passed GET_TMDB_CONFIGURATION action', () => {
    const action = SearchActions.loadTMDBApiConfigurationSuccess(TestData.tmdb_configuration);
    expect(TMDBApiConfigurationReducer(initialState, action)).toEqual(TestData.tmdb_configuration);
  });
});
