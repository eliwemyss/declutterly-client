import {ADD_INVENTORY} from '../actions/index';

const initialState = {
	inventory: []
}

export default (state = initialState, action) => {
	if(action.type === ADD_INVENTORY) {
		return state;
	}
};