import { connect } from 'react-redux';
import TeamDisplay from './TeamDisplay';



const mapStateToProps = ({ teams }) => ({
	teams,
});



export default connect(mapStateToProps)(TeamDisplay);