/**
 * @file Movie component
 * @description This component is responsible for the displaying a movie thumbnail
 * @author Andrew James
 * @version 0.1
 */

import React, {PropTypes} from 'react';

import PosterThumbnail from './PosterThumbnail';

const Movie = ({src, alt}) => {
  return (
    <div className="tmdb-movie__image">
      <PosterThumbnail src={src} alt={alt} />
    </div>
  );
};

Movie.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Movie;
