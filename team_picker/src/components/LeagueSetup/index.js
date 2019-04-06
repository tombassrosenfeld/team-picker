import { connect } from 'react-redux';
import LeagueSetup from './LeagueSetup';
import { submitSettings } from '../../data/actions';

const mapDispatchToProps = dispatch => {
	return {
		saveSettings: (data) => {
			dispatch(submitSettings(data))
		},
	};
};

export default connect(null, mapDispatchToProps)(LeagueSetup); 