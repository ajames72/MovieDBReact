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
