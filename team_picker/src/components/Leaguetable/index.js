import { connect } from 'react-redux';
import Leaguetable from './Leaguetable.js';
// import {  } from '../../data/actions';

const mapStateToProps = ({ leaguetable }) => ({

	leaguetable,
});



export default connect(mapStateToProps)(Leaguetable);