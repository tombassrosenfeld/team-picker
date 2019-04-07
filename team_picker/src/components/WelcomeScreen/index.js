import { connect } from 'react-redux';
import WelcomeScreen from './WelcomeScreen';


const mapStateToProps = ({ teams }) => ({
	teams,
});

export default connect(mapStateToProps)(WelcomeScreen);