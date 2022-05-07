import {
  ADD_ADDRESS,
  ADD_TO_CART,
  ERROR,
  GET_PRODUCTS,
  LOADING,
  LOGED_IN,
  LOGED_OUT,
} from "./aciton_type";
import axios from "axios";

export const get_data = (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get("http://localhost:8080/Cart")
    .then((payload) => {
      dispatch({ type: ADD_TO_CART, payload: payload.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR });
    });
};

export const Products_data_func = (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(`http://localhost:8080/Featured`)
    .then((response) => {
      console.log("response:", response);
      dispatch({ type: GET_PRODUCTS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: ERROR });
    });
};

export const add_to_cart = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const login_func = (payload) => {
  localStorage.setItem("token", payload);
  return { type: LOGED_IN, payload };
};

export const logout_func = () => {
  localStorage.removeItem("token");
  return { type: LOGED_OUT };
};

export const loading = () => {
  return { type: LOADING };
};

export const error = () => {
  return { type: ERROR };
};
