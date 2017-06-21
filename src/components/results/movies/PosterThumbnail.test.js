import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import PosterThumbnail from './PosterThumbnail';

describe('PosterThumbnail', () => {

  const url = '/path/to/image/src.png';
  const altText = 'image alt text';

  describe('component structure', () => {
    it('should contain an image element', () => {
      let posterThumb = shallow(<PosterThumbnail src={url} alt={altText} />);

      expect(posterThumb.find('img').length).toEqual(1);
    });
  });

  describe('component props', () => {
    it('should have a src attribute', () => {
      let posterThumb = shallow(<PosterThumbnail src={url} alt={altText} />);

      expect(posterThumb.props().src).toEqual(url);
    });

    it('should have an alt text attribute', () => {
      let posterThumb = shallow(<PosterThumbnail src={url} alt={altText} />);

      expect(posterThumb.props().alt).toEqual(altText);
    });
  });
});
