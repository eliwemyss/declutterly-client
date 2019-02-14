import {
  FETCH_INVENTORY_SUCCESS,
  FETCH_INVENTORY_ERROR,
  FETCH_SINGLE_INVENTORY_SUCCESS,
  FETCH_SINGLE_INVENTORY_ERROR
} from '../actions/index';

const initialState = {
  error: null,
  inventory: [],
  inventoryDetails: {
    item: '',
    description: '',
    location:'',
    category: '',
    decision: ''
  }
};


export default function mainReducer(state = initialState, action) {
  if (action.type === 'FETCH_INVENTORY_SUCCESS') {
    return Object.assign({}, state, {
      inventory: action.data,
      error: null
    });
  } else if (
    action.type === FETCH_INVENTORY_SUCCESS ||
    action.type === FETCH_SINGLE_INVENTORY_ERROR
  ) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === FETCH_SINGLE_INVENTORY_SUCCESS) {
    return Object.assign({}, state, {
      inventoryDetails: action.data,
      error: null
    });
  }
  return state;

}