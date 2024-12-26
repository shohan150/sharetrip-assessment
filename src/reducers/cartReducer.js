const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add-to-cart":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      break;

    case "remove-from-cart":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
      break;

    case "increase-quantity":
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
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
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload.id && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
      break;

    case "empty-cart" :
      return {
        ...state,
        cartItems: [],
      };
      break;

    default:
      return state;
  }
};

export { cartReducer, initialState };

