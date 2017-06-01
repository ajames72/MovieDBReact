/**
 * @file Poster component
 * @description This component is responsible for the display of the poster image
 * @author Andrew James
 * @version 0.1
 */

import React, {PropTypes} from 'react';

const Poster = ({src, alt}) => {
  return (
  <img src={src} alt={alt} />
  );
};

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Poster;
