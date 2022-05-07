import {
  ADD_TO_CART,
  ERROR,
  LOADING,
  LOGED_IN,
  LOGED_OUT,
} from "./aciton_type";

let initState = {
  isloading: false,
  isError: false,
  cartData: [],
  isAuth: false,
  Addresses: [],
  token: localStorage.getItem("token") || "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return {
        ...state,
        isloading: true,
        isError: false,
      };
    }
    case ADD_TO_CART: {
      console.log(state);
      return {
        ...state,
        cartData: payload,
      };
    }
    case ERROR: {
      return {
        ...state,
        isloading: false,
        isError: true,
      };
    }
    case LOGED_IN: {
      return { ...state, isAuth: true, token: payload };
    }
    case LOGED_OUT: {
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};
