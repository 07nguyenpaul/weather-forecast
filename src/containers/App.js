// import { connect } from 'react-redux';
// import App from '../components/App';
// import * as actionCreators from '../actions/actionCreators';
// import { bindActionCreators } from 'redux';
// import { fetchByGPS } from '../actions/actionCreators';
//
// function mapStateToProps(state) {
//   return state;
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }
//
// class App extends Component {
//
//   getLatAndLong(){
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function(position) {
//       return(
//           { latitude: position.coords.latitude,
//             longitude: position.coords.longitude
//           }
//         );
//     });
//     } else {
//       console.error('navigator.geolocation object not found. No geolocation services available.')
//     }
//   }
//
//   componentDidMount() {
//     let currentPosition = getLatAndLong();
//     let currentWeather = this.props.fetchByGPS(weather, currentPosition.latitude, currentPosition.longitude);
//     console.log('hello');
//   }
//
//   render(){
//     return (
//       <div>
//         <App />
//       </div>
//     )
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
