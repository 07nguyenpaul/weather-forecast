import { connect } from 'react-redux'
import Main from './Main';

const mapStateToProps = state => {
  // return an object of redux store data
  // that you'd like available in your component
  return {};
}

const App = connect(mapStateToProps)(Main)

export default App;
