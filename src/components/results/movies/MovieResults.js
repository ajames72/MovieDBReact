/**
 * @file MovieResults component
 * @description displays the movies as a result of the movie search
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import MovieResult from './MovieResult';
import Poster from './Poster';

class MovieResults extends React.Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  click(event) {
    this.props.setPoster({'src': event.target.src, 'alt': event.target.alt});
    this.props.showFullSizePoster();
  }

  render() {

    const {searchResults, config, isHidden, posterAttrs, showFullSizePoster} = this.props;
    const {src, alt} = posterAttrs;
    const path = config.images.base_url + config.images.poster_sizes[0];
    const animTime = 1000;

    //------------------------------------------------//
    // Put the result into its own component  //
    // https://medium.freecodecamp.org/react-pattern-extract-child-components-to-avoid-binding-e3ad8310725e  //
    //------------------------------------------------//
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          {searchResults.results.length > 0 ?
            (
              searchResults.results.map((result, index) =>
                <MovieResult
                  key={index}
                  path={path + result.poster_path}
                  title={result.original_title}
                  onclick={this.click}
                  />
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
  }
}

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
