import { ADD_TO_CART, LOADING } from "./aciton_type";

let initState = {
  isloading: false,
  isError: false,
  cartData: [],
  isAuth: false,
  Addresses: [],
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
      return {
        ...state,
        cartData: [...cartData, payload],
      };
    }
    case ERROR: {
      return {
        ...state,
        isloading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
