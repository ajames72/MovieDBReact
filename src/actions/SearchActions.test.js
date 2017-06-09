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

  describe('movie search', () => {
    
    let mockResponse = {
      "results": []
    };

    let mockQuery = {
      query: "Search Term",
      include_adult: 'true',
      language: 'aa',
      region: 'AS',
      year: '1999',
      primary_release_year: '2000'
    };

    const expectedAction = {
      type: types.SEARCH_MOVIES, results: mockResponse
    };

    let scope = nock('http://localhost')
      .get('/3/search/movie?api_key=df3908a9e93ea4fa095429a46c0eec66&query=Search%20Term&include_adult=true&language=aa&region=AS&year=1999&primary_release_year=2000')
      .reply(200, mockResponse);


    it('should call the search movie API', () => {
      return store.dispatch(SearchActions.movieSearch(mockQuery)).then(() => {
        const actions = store.getActions();
        expect(actions[2]).toEqual(expectedAction);
      });
    });
  });

  describe('loadTMDBApiConfiguration', () => {
    const expectedAction = {
      type: types.GET_TMDB_CONFIGURATION, config: TestData.tmdb_configuration
    };

    let scope = nock('https://localhost')
      .get('/3/configuration?api_key=df3908a9e93ea4fa095429a46c0eec66')
      .reply(200, TestData.tmdb_configuration);

    it('should create an action to load the configuration', () => {
      store.dispatch(SearchActions.loadTMDBApiConfiguration()).then(() => {
        const actions = store.getActions();
        expect(actions[3]).toEqual(expectedAction);
      }, (error) => {

      });
    });

  });
});
