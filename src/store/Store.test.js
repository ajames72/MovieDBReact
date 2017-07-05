//------------------------------------------//
//                                          //
// Disable import/default to fix No default //
// export found in module  import/default   //
// lint error                               //
//                                          //
//------------------------------------------//
/*eslint-disable import/default*/
import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureStore from './ConfigureStore';
import * as SearchActions from '../actions/SearchActions';
import {TestException} from '../../test/Test';
import * as TestData from '../../test/TestData';


describe ('Store', () => {

  nock.disableNetConnect();

  const initialState = {
    config: {},
    languages: {},
    countries: {},
    searchResults: {},
    sectionAttributes: {},
    posterAttrs: {}
  };

  const store = configureStore(initialState);

  it('should load TMDB configuration', () => {

    let scope = nock('http://localhost')
      .get('/3/configuration')
      .query({
        api_key: 'df3908a9e93ea4fa095429a46c0eec66'
      })
      .reply(200, TestData.tmdb_configuration);

    store.dispatch(SearchActions.loadTMDBApiConfiguration()).then(() => {
      const state = store.getState().config;
      expect(state).toEqual(TestData.tmdb_configuration);
    }, (error) => {
      //@TODO: test for error
      throw new TestException('Store - configuration error');
    });
  });


  it('should load language options', () => {

    let scope = nock('http://localhost')
                  .get('/MovieDB/language-codes/r/language-codes.php')
                  .reply(200, TestData.languages);

    store.dispatch(SearchActions.loadLanguageOptions()).then(() => {
      const state = store.getState().languages;
      expect(state).toEqual(TestData.languages);
    }, (error) => {
      throw new TestException('Store - language-codes error');
    });
  });

  it('should load country options', () => {

    let scope = nock('http://localhost')
                  .get('/MovieDB/data/core/country-list/r/data.php')
                  .reply(200, TestData.countries);

    store.dispatch(SearchActions.loadCountryOptions()).then(() => {
      const state = store.getState().countries;
      expect(state).toEqual(TestData.countries);
    }, (error) => {
      throw new TestException('Store - country-list error');
    });
  });

  it('should load search results', () => {

    let mockQuery = {
      query: "Search Term"
    };

    let scope = nock('http://localhost')
      .get('/3/search/movie?api_key=df3908a9e93ea4fa095429a46c0eec66&query=Search%20Term')
      .reply(200, TestData.movie_search_results);

      /*
    let scope = nock('https://localhost')
      .get('/3/search/movie')
      .query({
        'api_key': 'df3908a9e93ea4fa095429a46c0eec66',
        'query': 'Search%20Term'
      })
      .reply(200, TestData.movie_search_results);

      */
    store.dispatch(SearchActions.movieSearch(mockQuery)).then(() => {
      const state = store.getState().searchResults;
      expect(state).toEqual(TestData.movie_search_action_results);
    }, (error) => {
      throw new TestException(error, 'Store Test - load search results');
    });
  });

  it('should load section attributes', () => {
    const mockSectionData = {'title': 'Section Data', 'section': 'route_to_section'};

    const action = SearchActions.setSectionAttributes(mockSectionData);
    store.dispatch(action);

    const state = store.getState().sectionAttributes;

    expect(state).toEqual(mockSectionData);
  });
});
