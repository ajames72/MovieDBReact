import React from 'react';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
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

    const showFullSizePoster = sinon.stub();
    const setPoster = sinon.stub();

    const results = mount(
        <MovieResults
          searchResults={TestData.movie_search_results}
          config={TestData.tmdb_configuration}
          isHidden
          showFullSizePoster={showFullSizePoster}
          setPoster={setPoster}
          posterAttrs={posterAttrs}
          />);

    afterEach(() => {
      showFullSizePoster.reset();
      setPoster.reset();
    });

    it('should display movies', () => {
      expect(results.find('.tmdb-movie').length).toEqual(20);
    });

    it('should call function to show poster', () => {
      let movieResult = results.find('.tmdb-movie').at(0).simulate('click');
      expect(showFullSizePoster.calledOnce).toBeTruthy();
    });

    it('should call function to set poster properties', () => {
      //mock event object that will get passed through to the event handlers
      const mockEventObj = {target: {src: 'http://image.tmdb.org/t/p/w92/tvSlBzAdRE29bZe5yYWrJ2ds137.jpg', alt: 'Star Wars'}};

      let movieResult = results.find('.tmdb-movie').at(0).simulate('click', mockEventObj);

      expect(setPoster.calledOnce).toBeTruthy();
      expect(setPoster.getCall(0).args[0]).toEqual(mockEventObj.target);
    });
  });

  describe('component props', () => {

    const results = mount(
        <MovieResults
          searchResults={TestData.movie_search_results}
          config={TestData.tmdb_configuration}
          isHidden
          showFullSizePoster={noop}
          setPoster={noop}
          posterAttrs={posterAttrs}
          />);

    it('should have searchResults props', () => {
      expect(results.props().searchResults).toEqual(TestData.movie_search_results);
    });

    it('should have config props', () => {
      expect(results.props().config).toEqual(TestData.tmdb_configuration);
    });

    it('should have isHidden props', () => {
      expect(results.props().isHidden).toBeTruthy();
    });

    it('should have posterAttrs props', () => {
      expect(results.props().posterAttrs).toEqual(posterAttrs);
    });
  });

});
