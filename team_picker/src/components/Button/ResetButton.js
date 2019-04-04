import { connect } from 'react-redux';
import Button from './Button';
import { reset } from '../../data/actions';

const mapStateToProps = () => ({
	label: 'Reset',
});

const mapDispatchToProps = dispatch => {
	return {
		buttonAction: () => {
			dispatch(reset());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);