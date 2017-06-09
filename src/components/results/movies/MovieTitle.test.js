import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import MovieTitle from './MovieTitle';

describe('MovieTitle', () => {

  const title = `Movie Title`;

  describe('Component structure', () => {
    it('should contain a div element', () => {
      let movieTitle = shallow(<MovieTitle title={title} />);

      expect(movieTitle.find('div').length).toEqual(1);
    });

    it('should contain title text', () => {
      let movieTitle = shallow(<MovieTitle title={title} />);

      expect(movieTitle.find('.title').text()).toEqual(title);
    });

    it('should contain a tooltip', () => {
      let movieTitle = shallow(<MovieTitle title={title} />);

      expect(movieTitle.find('.tmdb-movie__tooltip').length).toEqual(1);
    });

    it('should contain a tooltip containing the title text', () => {
      let movieTitle = shallow(<MovieTitle title={title} />);

      expect(movieTitle.find('.tmdb-movie__tooltip').text()).toEqual(title);
    });
  });

  describe('Component props', () => {
    it('should have a \'title\' property', () => {
      let movieTitle = mount(<MovieTitle title={title} />);

      expect(movieTitle.props().title).toEqual(title);
    });
  });

});
