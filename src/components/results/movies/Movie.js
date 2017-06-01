import React, {PropTypes} from 'react';

import Poster from './Poster';

const Movie = ({src, alt}) => {
  return (
    <div className="tmdb-movie__image">
      <Poster src={src} alt={alt} />
    </div>
  );
};

Movie.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Movie;
