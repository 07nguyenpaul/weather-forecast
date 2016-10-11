import { connect } from 'react-redux';
import DashboardCard from '../components/DashboardCard';
import * as actionCreators from '../actions/actionCreators';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
 return state;
};

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCard);
