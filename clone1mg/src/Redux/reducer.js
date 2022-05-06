import { ADD_TO_CART, ERROR, LOADING } from "./aciton_type";

let initState = {
  isloading: false,
  isError: false,
  cartData: [
    {
      id: 1,
      name: "Flamingo Orthopaedic Heating Belt XL",
      bottels: "packet of 1 Belt",
      MRP: 990,
      Price: 830,
    },
  ],
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
        cartData: [...state.cartData, payload],
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
