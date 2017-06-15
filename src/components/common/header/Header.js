/**
 * @file Header
 * @description Controller component for the Header
 * @author Andrew James
 * @version 0.1
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import NavBar from './NavBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
}


function mapStateToProps(state, ownProps) {
  return {
    sectionAttributes: state.sectionAttributes
  };
}

const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(NavBar);
