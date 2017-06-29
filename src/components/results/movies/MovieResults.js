/**
 * @file MovieResults component
 * @description displays the movies as a result of the movie search
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Movie from './Movie';
import MovieTitle from './MovieTitle';
import Poster from './Poster';

const MovieResults = ({searchResults, config, isHidden, showFullSizePoster, setPoster, posterAttrs}) => {

  const path = config.images.base_url + config.images.poster_sizes[0];
  const animTime = 1000;

  const {src, alt} = posterAttrs;

  function click(event) {
    setPoster({'src': event.target.src, 'alt': event.target.alt});
    showFullSizePoster();
  }

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        {searchResults.results.length > 0 ?
          (
            searchResults.results.map((result, index) =>
              <div key={index} className="tmdb-movie" onClick={click}>
                <Movie src={path + result.poster_path} alt={result.original_title}/>
                <MovieTitle title={result.original_title} />
              </div>
            )
          ) :
          (
            <div>
              <h3>Your search returned no results</h3>
            </div>
          )
        }
      </div>
      <CSSTransitionGroup
        transitionName="tmdb-movie__display-poster"
        transitionEnterTimeout={animTime}
        transitionLeaveTimeout={animTime}>
        {!isHidden &&
          <Poster src={src} alt={alt} hideFullSizePoster={showFullSizePoster} />
        }
      </CSSTransitionGroup>
    </div>
  );
};

MovieResults.defaultProps = {
  posterAttrs: {
    src: '',
    alt: ''
  }
};

MovieResults.propTypes = {
  searchResults: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  isHidden: PropTypes.bool.isRequired,
  showFullSizePoster: PropTypes.func.isRequired,
  setPoster: PropTypes.func.isRequired,
  posterAttrs: PropTypes.object.isRequired
};

export default MovieResults;
