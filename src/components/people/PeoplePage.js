/**
 * @file People Page Component
 * @description Controller component for the People Search section
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PeopleSearch from './PeopleSearch';
import * as searchActions from '../../actions/SearchActions';

class PeoplePage extends React.Component {
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
export default connectedStateAndProps(PeopleSearch);
