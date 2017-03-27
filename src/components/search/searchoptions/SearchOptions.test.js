import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import { shallow, render } from 'enzyme';
import SearchOptions from './SearchOptions';

describe('SearchOptions', function() {
  describe('component structure', function() {
    //Fake Store and Middleware
    const middlewares = [ thunk ];
    const mockStore = configureStore(middlewares);

    const languages = [
      {
        "alpha2": "de",
        "English": "German"
      },
      {
        "alpha2": "en",
        "English": "English"
      },
      {
        "alpha2": "es",
        "English": "Spanish; Castilian"
      },
      {
        "alpha2": "fr",
        "English": "French"
      },
      {
        "alpha2": "ja",
        "English": "Japanese"
      },
      {
        "alpha2": "ru",
        "English": "Russian"
      },
      {
        "alpha2": "tl",
        "English": "Tagalog"
      },
      {
        "alpha2": "zh",
        "English": "Chinese"
      }
    ];

    it('should contain a SearchOptions wrapper', function() {
      //http://stackoverflow.com/questions/36211739/invariant-violation-could-not-find-store-in-either-the-context-or-props-of-c
      // Initialize mockstore with props
      const initialState = {
        languages: languages
      };
      const store = mockStore(initialState);

      //let searchOptions = shallow(<SearchOptions />);
      let searchOptions = render(<Provider store={store}><SearchOptions /></Provider>);
      expect(searchOptions.find('.tmdb-searchoptions').length).toEqual(1);
      //expect(true).toBeTruthy();
    });
  });
});
