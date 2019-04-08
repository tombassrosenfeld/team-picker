import { connect } from 'react-redux';
import Settings from './Settings';
import { submitSettings } from '../../data/actions';

const mapStateToProps = ({ numberOfTeams, teamSize}) => ({
	numberOfTeams,
	teamSize,
});

const mapDispatchToProps = dispatch => {
	return {
		saveSettings: (data) => {
			dispatch(submitSettings(data))
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings); 