import { connect } from 'react-redux';
import WelcomeScreen from './WelcomeScreen';


const mapStateToProps = ({ league, }) => ({
	league,
});

export default connect(mapStateToProps)(WelcomeScreen);