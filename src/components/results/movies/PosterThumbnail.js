/**
 * @file Poster Thumbnail component
 * @description This component is responsible for the display of the poster image
 * @author Andrew James
 * @version 0.1
 */

import React, {PropTypes} from 'react';

const PosterThumbnail = ({src, alt}) => {
  return (
  <img src={src} alt={alt} />
  );
};

PosterThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default PosterThumbnail;
