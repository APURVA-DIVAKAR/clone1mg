import {
  ADD_TO_CART,
  ERROR,
  GET_PRODUCTS,
  LOADING,
  LOGED_IN,
  LOGED_OUT,
} from "./aciton_type";

let initState = {
  isLoading: false,
  isError: false,
  cartData: [],
  isAuth: false,
  Addresses: [],
  Product_data: [],
  token: localStorage.getItem("token") || "",
};

export const reducer = (state = initState, { type, payload }) => {
  console.log('payload:', payload)
  switch (type) {
    case LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        isLoading: false,
        cartData: payload,
      };
    }
    case ERROR: {
      return {
        ...state,
        isLoading: false,
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
    case GET_PRODUCTS: {
      return { ...state, isLoading: false, Product_data: payload };
    }
    default: {
      return state;
    }
  }
};
