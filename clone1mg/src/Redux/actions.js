import { ADD_ADDRESS, ADD_TO_CART, ERROR, LOADING } from "./aciton_type";
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

export const add_to_cart = (payload) => {
  return { type: ADD_TO_CART, payload };
};

// export const loading = () => {
//   return { type: LOADING };
// };

// export const error = () => {
//   return { type: ERROR };
// };
