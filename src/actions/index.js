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
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/inventory`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(responseData => dispatch(fetchInventorySuccess(responseData)))
    .catch(error => {
      dispatch(fetchInventoryError(error));
    });
};

export const fetchSingleInventoryById = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/inventory/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(responseData => dispatch(fetchSingleInventorySuccess(responseData)))
    .catch(error => {
      dispatch(fetchSingleInventorySuccess(error));
    });
};

export const deleteInventory = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/inventory/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => dispatch(fetchInventory()))
    .catch(error => {
      dispatch(fetchInventoryError(error));
    });
};

export const addInventory = inventory => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/inventory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
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

// export const addInventory = inventory => (dispatch, getState) => {
//   console.log('action', inventory)
//   dispatch(fetchInventorySuccess(inventory))
// };

export const editInventory = inventory => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/inventory/edit/${inventory.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(inventory)
  })
    .then(data => dispatch(fetchInventory()))
    .catch(error => {
      dispatch(fetchInventoryError(error));
    });
};