import { connect } from 'react-redux';
import TeamDisplay from './TeamDisplay';
import { createLeague } from '../../data/actions';



const mapStateToProps = ({ teams }) => ({
	teams,
});

const mapDispatchToProps = dispatch => {
	return {
		startLeague: () => {
			dispatch(createLeague())
		}
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(TeamDisplay);