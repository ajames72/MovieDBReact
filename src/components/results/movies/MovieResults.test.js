import React from 'react';
import expect from 'expect';
import { render } from 'enzyme';
import * as TestData from '../../../../test/TestData';
import MovieResults from './MovieResults';

describe('MovieResults', () => {

  const noop = () => {
    //noop
  };

  const posterAttrs = {
    src: '',
    alt: ''
  };

  describe('component structure', () => {

    it('should display movies', () => {

      let results = render(
          <MovieResults
            searchResults={TestData.movie_search_results}
            config={TestData.tmdb_configuration}
            isHidden
            showFullSizePoster={noop}
            setPoster={noop}
            posterAttrs={posterAttrs}
            />
      );

      expect(results.find('.tmdb-movie').length).toEqual(20);
    });

    /**
     * @TODO: Test Click event
     */
  });

  describe('component props', () => {
    /**
     * @TODO: DO TESTS
     */
  });
});
