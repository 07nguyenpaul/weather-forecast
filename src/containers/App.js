import { connect } from 'react-redux';
import Main from './Main';
import DetailedCity from './DetailedCity';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';

// const mapStateToProps = state => {
//   // return an object of redux store data
//   // that you'd like available in your component
//   return {
//     dummyData: state.dummyData
//   };
// };

function mapStateToProps(state) {
  console.log(state);
  return {
    dummyData: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
