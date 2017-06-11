/**
 * @file Movie Page Component
 * @description Controller component for the Movie Search section
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MovieSearch from './MovieSearch';
import * as searchActions from '../../actions/SearchActions';

class MoviePage extends React.Component {
  constructor(props) {
    super(props);
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchActions, dispatch)
  };
}

const connectedStateAndProps = connect(mapStateToProps, matchDispatchToProps);
export default connectedStateAndProps(MovieSearch);
