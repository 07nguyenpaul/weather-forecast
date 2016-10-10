import { connect } from 'react-redux';
import App from '../components/App';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  console.log(state);
  return {
    dummyData: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
