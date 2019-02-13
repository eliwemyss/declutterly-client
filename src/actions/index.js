import {API_BASE_URL} from '../config';

export const FETCH_INVENTORY_SUCCESS = "FETCH_INVENTORY_SUCCESS";
export const fetchInventorySuccess = data => ({
  type: FETCH_INVENTORY_SUCCESS,
  data
});

export const FETCH_INVENTORY_ERROR = "FETCH_INVENTORY_ERROR";
export const fetchInventoryError = error => ({
  type: FETCH_INVENTORY_ERROR,
  error
});

export const FETCH_SINGLE_INVENTORY_SUCCESS =
  "FETCH_SINGLE_INVENTORY_SUCCESS";
export const fetchSingleInventorySuccess = data => ({
  type: FETCH_SINGLE_INVENTORY_SUCCESS,
  data
});

export const FETCH_SINGLE_INVENTORY_ERROR = "FETCH_SINGLE_INVENTORY_ERROR";
export const fetchSingleInventoryError = error => ({
  type: FETCH_SINGLE_INVENTORY_ERROR,
  error
});

export const fetchInventory = (value = "") => (dispatch, getState) => {
  return fetch(`${API_BASE_URL}/inventory?decision=${value}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => res.json())
    .then(responseData => dispatch(fetchInventorySuccess(responseData)))
    .catch(error => {
      dispatch(fetchInventoryError(error));
    });
};

export const fetchSingleInventoryById = id => (dispatch, getState) => {
  return fetch(`${API_BASE_URL}/applications/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => res.json())
    .then(responseData => dispatch(fetchSingleInventorySuccess(responseData)))
    .catch(error => {
      dispatch(fetchSingleInventorySuccess(error));
    });
};

export const deleteInventory = id => (dispatch, getState) => {
  return fetch(`${API_BASE_URL}/inventory/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => dispatch(fetchInventory()))
    .catch(error => {
      dispatch(fetchInventoryError(error));
    });
};

export const addInventory = inventory => (dispatch, getState) => {
  return fetch(`${API_BASE_URL}/inventory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item: inventory.item,
      description: inventory.description,
      location: inventory.location,
      category: inventory.category,
      decision: inventory.decision,
      id: inventory.id
    })
  })
    .then(data => dispatch(fetchInventory()))
    .catch(error => {
      dispatch(fetchInventoryError(error));
    });
};

export const editInventory = inventory => (dispatch, getState) => {
  return fetch(`${API_BASE_URL}/edit/inventory/${inventory.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inventory)
  })
    .then(data => dispatch(fetchInventory()))
    .catch(error => {
      dispatch(fetchInventoryError(error));
    });
};