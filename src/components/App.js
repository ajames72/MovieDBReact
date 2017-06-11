import React, {PropTypes} from 'react';
import Header from './common/Header';
/*
import Search from './search/Search';
import Results from './results/Results';
*/

class App extends React.Component {
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
  children: PropTypes.object.isRequired
}

export default App;
