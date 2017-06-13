import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/SearchActions';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.loadTMDBApiConfiguration();
    this.props.actions.loadLanguageOptions();
    this.props.actions.loadCountryOptions();
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//export default App;
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
export default connectedStateAndProps(App);
