const initialState = {
  cartData: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "add-to-cart":
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };
      break;

    case "remove-from-cart":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };
      break;

    case "icrease-quantity":
      return {
        ...state,
        cartData: state.cartData.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
      break;

    case "decrease-quantity":
      return {
        ...state,
        cartData: state.cartData.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
      break;

    case "empty-cart" :
      return {
        ...state,
        cartData: [],
      };
      break;
      
    default:
      return state;
  }
};

export { cartReducer, initialState };

