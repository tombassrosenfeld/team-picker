import { connect } from 'react-redux';
import TeamElement from './TeamElement';
import { updateTeamWin, updateTeamDraw } from '../../data/actions';

const mapStateToProps = ({ teams }) => ({
	teams,
});

const mapDispatchToProps = dispatch => {
	return {
		updateTeamWin: (data) => {
			dispatch(updateTeamWin(data))
		},
		updateTeamDraw: (data) => {
			dispatch(updateTeamDraw(data))
		},


	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamElement);