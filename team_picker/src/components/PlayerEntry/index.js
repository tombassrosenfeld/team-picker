import { connect } from 'react-redux';
import PlayerEntry from './PlayerEntry';
import { submitPlayers } from '../../data/actions';

const mapStateToProps = ({ totalPlayers }) => ({
	totalPlayers,
});

const mapDispatchToProps = dispatch => {
	return {
		savePlayers: (data) => {
			// console.log(data);
			dispatch(submitPlayers(data))
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerEntry);