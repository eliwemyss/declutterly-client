import protectedDataReducer from './index';

describe('protectedDataReducer', () => {
	it('should set the initial state when nothing is passed in', () => {
		const state = protectedDataReducer(undefined, {type: '__UNKNOWN'});
		expect(state).toEqual({
			error: null,
  			inventory: [],
  			inventoryDetails: {
			    item: '',
			    description: '',
			    location:'',
			    category: '',
			    decision: ''
			}
		});
	});
});