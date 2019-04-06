import { connect } from 'react-redux';
import LeagueScreen from './LeagueScreen';
// import { .... } from '../../data/actions';

const mapStateToProps = ({ fixtures, teams, homeAway }) => ({
	fixtures, 
	teams, 
	homeAway,
});

// const mapDispatchToProps = dispatch => {
// 	return {
// 		: (data) => {
// 			dispatch(....(data))
// 		},
// 	};
// };

export default connect(mapStateToProps, /*mapDispatchToProps*/)(LeagueScreen);