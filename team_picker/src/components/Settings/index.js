import { connect } from 'react-redux';
import Settings from './Settings';
import { submitSettings } from '../../data/actions';

const mapDispatchToProps = dispatch => {
	return {
		saveSettings: (data) => {
			dispatch(submitSettings(data))
		},
	};
};

export default connect(null, mapDispatchToProps)(Settings); 