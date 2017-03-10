import React from 'react';
import Header from './common/Header';
import Search from './search/Search';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
