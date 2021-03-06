import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { mount } from 'enzyme';
import Search from './Search';

describe('Search component', () => {

  const noop = () => {
    //Noop
  };

  const languages = [
    {
      "alpha2": "de",
      "English": "German"
    }
  ];

  const countries = [
    {
      "Name": "Country_a",
      "Code": "CA"
    }
  ];

  describe('component structure', () => {
    //Fake Store and Middleware
    const middlewares = [ thunk ];
    const mockStore = configureStore(middlewares);
    const initialState = {
      languages,
      countries,
      sectionAttributes: {
        'section': "movies",
        'title': "Movie Search"
      }
    };

    it('should contain a SearchBox component', () => {

      const store = mockStore(initialState);

      let search = mount(
        <Provider store={store}>
          <Search search={noop} />
        </Provider>
      );

      expect(search.find('SearchBox').length).toEqual(1);
    });

    it('should contain a SearchOptions component', () => {

      const store = mockStore(initialState);

      let search = mount(
        <Provider store={store}>
          <Search search={noop} />
        </Provider>
      );

      expect(search.find('SearchOptions').length).toEqual(1);
    });

    /**
     * @TODO: Test for missing attributes/states/etc
     */
  });
});
