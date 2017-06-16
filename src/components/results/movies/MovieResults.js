/**
 * @file MovieResults component
 * @description displays the movies as a result of the movie search
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';

import Movie from './Movie';
import MovieTitle from './MovieTitle';

const MovieResults = ({searchResults, config}) => {

  const path = config.images.base_url + config.images.poster_sizes[0];

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        {
          searchResults.results.map((result, index) =>
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
  searchResults: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired
};

export default MovieResults;
