import { connect } from 'react-redux';
import TeamDisplay from './TeamDisplay';



const mapStateToProps = ({ teams, playersSubmitted }) => ({
	teams,
	playersSubmitted,
});



export default connect(mapStateToProps)(TeamDisplay);