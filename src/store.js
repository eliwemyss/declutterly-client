import { createStore, applyMiddleware, combineReducers } from 'redux';
import mainReducer from './reducers/index';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const store = createStore(
	combineReducers({
		form: formReducer,
		mainReducer
	}),
	applyMiddleware(thunk)
	);

export default store;