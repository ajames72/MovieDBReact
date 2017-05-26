/**
 * @file MovieResults component
 * @description displays the movies as a result of the movie search
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';

import Movie from './Movie';

const MovieResults = ({movies}) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {
          movies.results.map((result, index) => <div key={index} className="tmdb-movie">Movie {index}</div>)
        }
      </div>
    </div>
  );
};

MovieResults.propTypes = {
  movies: PropTypes.object.isRequired
};

export default MovieResults;
