/**
 * @file MovieResult component
 * @description This component is responsible for the displaying a single movie result
 * @author Andrew James
 * @version 0.1
 */

import React, {PropTypes} from 'react';
import Movie from './Movie';
import MovieTitle from './MovieTitle';

const MovieResult = ({path, title, onclick}) => {
  return (
    <div className="tmdb-movie" onClick={onclick}>
      <Movie src={path} alt={title}/>
      <MovieTitle title={title} />
    </div>
  );
}

MovieResult.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired
};

export default MovieResult;
