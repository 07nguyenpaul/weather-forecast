import React, { Component } from 'react'
import Main from './Main';
import Dashboard from './Dashboard';

// import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Dashboard />
      </div>
    );
  }
}

export default App;

// const mapStateToProps = state => {
//   // return an object of redux store data
//   // that you'd like available in your component
//   return {};
// }
//
// export default connect(mapStateToProps)(App)
