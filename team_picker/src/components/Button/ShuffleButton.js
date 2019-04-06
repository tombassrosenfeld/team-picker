import { connect } from 'react-redux';
import Button from './Button';
import { shuffle } from '../../data/actions';

const mapStateToProps = () => ({
	label: 'Shuffle',
	link: '#0',
});

const mapDispatchToProps = dispatch => {
	return {
		buttonAction: () => {
			dispatch(shuffle());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);