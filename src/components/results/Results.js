/**
 * @file Results Component
 * @description Displays the results of the search
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as ResultsActions from '../../actions/ResultsActions';
import MovieResults from './movies/MovieResults';


class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      isHidden: true
    };

    this.showFullSizePoster = this.showFullSizePoster.bind(this);
  }

  showFullSizePoster() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {

    const {searchResults, config, setPosterAttributesAction, posterAttrs} = this.props;

    return (
      <MovieResults
        searchResults={searchResults}
        config={config}
        isHidden={this.state.isHidden}
        showFullSizePoster={this.showFullSizePoster}
        setPoster={setPosterAttributesAction}
        posterAttrs={posterAttrs}
        />
    );
  }
}
// Include default posterAttrs because no data in the store until setPosterAttributes action is called
// & posterAttrs is a required prop
Results.defaultProps = {
  posterAttrs: {
    src: '',
    alt: ''
  }
};

Results.propTypes = {
  searchResults: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
  setPosterAttributesAction: PropTypes.func.isRequired,
  posterAttrs: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    searchResults: state.searchResults,
    config: state.config,
    posterAttrs: state.posterAttrs
  };
}

function matchDispatchToProps(dispatch) {
  return {
    setPosterAttributesAction: bindActionCreators(ResultsActions.setPosterAttributes, dispatch)
  };
}

const connectedStateAndProps = connect(mapStateToProps, matchDispatchToProps);
export default connectedStateAndProps(Results);
