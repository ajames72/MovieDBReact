/**
 * @file MovieTitle component
 * @description This component is responsible for the displaying the movie title
 * @author Andrew James
 * @version 0.1
 */

import React, {PropTypes} from 'react';

const MovieTitle = ({title}) => {
  return (
    <div className="tmdb-movie__title"><span className="title">{title}</span><span className="tmdb-movie__tooltip">{title}</span></div>
  );
};

MovieTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default MovieTitle;
