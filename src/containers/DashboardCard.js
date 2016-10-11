import { connect } from 'react-redux';
import DashboardCard from '../components/DashboardCard';

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(DashboardCard);
