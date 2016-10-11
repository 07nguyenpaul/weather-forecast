import { connect } from 'react-redux';
import DetailedCity from '../components/DetailedCity';

const mapStateToProps = (state) => {
 return state;
};

export default connect(mapStateToProps)(DetailedCity);
