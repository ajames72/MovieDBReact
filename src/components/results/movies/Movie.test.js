import React from 'react';
import expect from 'expect';
import { shallow, render, mount } from 'enzyme';
import Movie from './Movie';
import PosterThumbnail from './PosterThumbnail';

describe('Movie', () => {
  describe('component structure', () => {
    const url = '/path/to/image/src.png';
    const altText = 'image alt text';

    it('should contain a poster wrapper element', () => {
      let movie = render(<Movie src={url} alt={altText} />);

      expect(movie.find('.tmdb-movie__image').length).toEqual(1);
    });

    it('should contain a poster thumbnail element', () => {
      let movie = shallow(<Movie src={url} alt={altText} />);

      expect(movie.contains(<PosterThumbnail src={url} alt={altText} />)).toEqual(true);
    });

    describe('component props', () => {
      it('should have a src attribute', () => {
        let movie = mount(<Movie src={url} alt={altText} />);

        expect(movie.props().src).toEqual(url);
      });

      it('should have an alt attribute', () => {
        let movie = mount(<Movie src={url} alt={altText} />);

        expect(movie.props().alt).toEqual(altText);
      });
    });
  });
});
