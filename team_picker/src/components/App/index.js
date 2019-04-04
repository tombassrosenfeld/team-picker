import { connect } from 'react-redux';
import App from './App';


const mapStateToProps = ({ playersSubmitted }) => ({
	playersSubmitted,
});



export default connect(mapStateToProps)(App);