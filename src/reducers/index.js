import {UPDATE_INVENTORY} from '../actions/index';

const initialState = {
	inventory: []
}

export default (state = initialState, action) => {
	if(action.type === UPDATE_INVENTORY) {
		return state;
	}
};