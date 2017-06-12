import React from 'react';
import expect from 'expect';
import { render } from 'enzyme';
import * as TestData from '../../../../test/TestData';
import MovieResults from './MovieResults';

describe('MovieResults', () => {

  describe('component structure', () => {

    it('should display movies', () => {

      let results = render(
          <MovieResults movies={TestData.movie_search_results} config={TestData.tmdb_configuration} />
      );

      expect(results.find('.tmdb-movie').length).toEqual(20);
    });
  });
});
