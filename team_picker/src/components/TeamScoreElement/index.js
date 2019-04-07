import { connect } from 'react-redux';
import TeamScoreElement from './TeamScoreElement';
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

export default connect(mapStateToProps, mapDispatchToProps)(TeamScoreElement);