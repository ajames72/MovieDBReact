import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { mount } from 'enzyme';
import Results from './Results';

describe('Results', () => {

  const searchResults = {
    "page": 1,
    "results": [],
    "total_results": 0,
    "total_pages": 0
  };

  const config = {
    images: {
      base_url: '',
      poster_sizes: [
        "w92"
      ]
    }
  };

  describe('component structure', () => {
    //Fake Store and Middleware
    const middlewares = [ thunk ];
    const mockStore = configureStore(middlewares);
    const initialState = {
      searchResults,
      config,
      posterAttrs: {
        src: '',
        alt: ''
      },
      isHidden: true
    };

    it('should contain a MovieResults component', () => {
      const store = mockStore(initialState);

      let results = mount(
        <Provider store={store}>
          <Results />
        </Provider>
      );

      expect(results.find('MovieResults').length).toEqual(1);
    });
  });

  describe('component props', () => {
    /**
     * Cannot test controller Connected Props
     * https://github.com/reactjs/react-redux/issues/325
     * https://github.com/reactjs/redux/issues/1534
     */
  });
});
