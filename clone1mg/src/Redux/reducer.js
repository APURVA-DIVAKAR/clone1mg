import { ADD_TO_CART, ERROR, LOADING } from "./aciton_type";

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
    default: {
      return state;
    }
  }
};
