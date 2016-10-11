import { connect } from 'react-redux';
import PinnedCitiesList from '../components/PinnedCitiesList';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
 return state;
};

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PinnedCitiesList);
