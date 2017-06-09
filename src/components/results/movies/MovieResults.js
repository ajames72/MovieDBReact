/**
 * @file MovieResults component
 * @description displays the movies as a result of the movie search
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';

import Movie from './Movie';
import MovieTitle from './MovieTitle';

const MovieResults = ({movies, config}) => {

  const path = config.images.base_url + config.images.poster_sizes[0];

  return (
    <div className="row">
      <div className="col-lg-12">
        {
          movies.results.map((result, index) =>
            <div key={index} className="tmdb-movie">
              <Movie src={path + result.poster_path} alt={result.original_title}/>
              <MovieTitle title={result.original_title} />
            </div>
          )
        }
      </div>
    </div>
  );
};

MovieResults.propTypes = {
  movies: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

export default MovieResults;
