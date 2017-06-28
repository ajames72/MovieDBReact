import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import Poster from './Poster';

describe('Poster', () => {

  const url = '/path/to/image/src.png';
  const altText = 'image alt text';
  const noop = () => {

  };

  describe('component structure', () => {
    it('should contain an image element', () => {
      const poster = shallow(<Poster src={url} alt={altText} hideFullSizePoster={noop} />);

      expect(poster.find('img').length).toEqual(1);
    });

    it('should call function to hide poster', () => {

      const hideFullSizePoster = sinon.spy();
      const poster = mount(<Poster src={url} alt={altText} hideFullSizePoster={hideFullSizePoster} />);

      poster.find('.tmdb-movie__poster').at(0).simulate('click');

      expect(hideFullSizePoster.calledOnce).toBeTruthy();
    });
  });

  describe('component props', () => {

    const poster = mount(<Poster src={url} alt={altText} hideFullSizePoster={noop} />);

    it('should have a src attribute', () => {
      expect(poster.props().src).toEqual(url);
    });

    it('should have an alt text attribute', () => {
      expect(poster.props().alt).toEqual(altText);
    });
  });
});
