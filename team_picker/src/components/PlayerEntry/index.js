import { connect } from 'react-redux';
import PlayerEntry from './PlayerEntry';
import { submitPlayers } from '../../data/actions';

const mapDispatchToProps = dispatch => {
	return {
		savePlayers: (data) => dispatch(submitPlayers(data)),
	};
};

export default connect(null, mapDispatchToProps)(PlayerEntry);