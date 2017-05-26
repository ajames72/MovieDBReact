/**
 * @file Results Component
 * @description Displays the results of the search
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import MovieResults from './movies/MovieResults';


class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: {}
    };
  }


}

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}

const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(MovieResults);
