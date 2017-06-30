import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { mount } from 'enzyme';
import CollectionPage from './CollectionPage';
import * as TestData from '../../../../test/TestData';

describe('CollectionPage', () => {

  //Fake Store and Middleware
  const middlewares = [ thunk ];
  const mockStore = configureStore(middlewares);
  const initialState = {
    languages: TestData.languages,
    countries: TestData.countries,
    config: TestData.tmdb_configuration,
    searchResults: {results: []},
    sectionAttributes: {
      'section': "collections",
      'title': "Collection Search"
    }
  };

  describe('Component Structure', () => {

    let collectionPage;

    beforeEach(() => {
      let store = mockStore(initialState);

      collectionPage = mount(
        <Provider store={store}>
          <CollectionPage />
        </Provider>
      );
    });

    it('should display the search box', () => {
      expect(collectionPage.find('.tmdb-searchbox').length).toEqual(1);
    });

    it('should display the search options', () => {
      expect(collectionPage.find('.tmdb-searchoptions').length).toEqual(1);
    });
  });
});
