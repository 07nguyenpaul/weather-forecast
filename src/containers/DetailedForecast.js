import { connect } from 'react-redux';
import DetailedForecast from '../components/DetailedForecast';

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(DetailedForecast);
