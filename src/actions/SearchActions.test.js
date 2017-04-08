import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as types from './ActionTypes';
import * as SearchActions from './SearchActions';
import * as TestData from '../../test/TestData';

describe('SearchActions', () => {

  nock.disableNetConnect();

  const middlewares = [ thunk ];
  const mockStore = configureMockStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);

  describe('loadLanguageOptions', () => {
    const expectedAction = {
      type: types.GET_ISO639_1_CODES, languages: TestData.languages
    };


    let scope = nock('http://localhost')
                  .get('/MovieDB/language-codes/r/language-codes.php')
                  .reply(200, TestData.languages);

    it('should create an action to load the languages', () => {
      return store.dispatch(SearchActions.loadLanguageOptions()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedAction);
      }, (error) => {

      });
    });
  });

  describe('loadCountryOptions', () => {
    const expectedAction = {
      type: types.GET_ISO3166_1_CODES, countries: TestData.countries
    };

    let scope = nock('http://localhost')
                  .get('/MovieDB/data/core/country-list/r/data.php')
                  .reply(200, TestData.countries);

    it('should create an action to load the countries', () => {
      return store.dispatch(SearchActions.loadCountryOptions()).then(() => {
        const actions = store.getActions();
        expect(actions[1]).toEqual(expectedAction);
      }, (error) => {

      });
    });
  });

});
