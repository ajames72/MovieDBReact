/**
 * @file Poster component
 * @description This component is responsible for the display of the poster image
 * @author Andrew James
 * @version 0.1
 */

import React, {PropTypes} from 'react';

const Poster = ({src, alt, hideFullSizePoster}) => {
  return (
    <div className="tmdb-movie__poster" onClick={hideFullSizePoster}>
      <img src={src} alt={alt} />
    </div>
  );
};

Poster.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  hideFullSizePoster: PropTypes.func.isRequired
};

export default Poster;
