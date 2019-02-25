import {
  FETCH_INVENTORY_SUCCESS,
  fetchInventorySuccess
} from '../actions/index';

import {
	AUTH_SUCCESS,
	authSuccess
} from '../actions/auth';

describe("fetchInventorySuccess", () => {
	it("Should return the action", () => {
		const action = fetchInventorySuccess();
		expect(action.type).toEqual(FETCH_INVENTORY_SUCCESS)
	});
});

describe("authSuccess", () => {
	it("Should return the action", () => {
		const action = authSuccess();
		expect(action.type).toEqual(AUTH_SUCCESS)
	});
});