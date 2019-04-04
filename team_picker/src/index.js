import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import initial from './data/initial.js';
import reducer from './data/reducer.js';
import persistState from "redux-localstorage";
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import './styles/style.css'


const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
	reducer, 
	initial,
	composeEnhancers(persistState())
);


	
ReactDOM.render(
	<Provider store={ store }>
		<div classname="app_wrapper">
			<App />
		</div>
	</Provider>, 
document.getElementById('root')
);





	
	


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
