import { db } from "../Firebase/Confiq";

export const initialState = {
  Products: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    // case "ADD":
    //   return {
    //     ...state,
    //     Products: [...state.Products, action.items],
    //   };
    //   break;
    case "ADD_PRODUCT":
      return {
        ...state,
        Products: [
          db.collection("products").add({
            products: action.items,
          }),
        ],
      };
      break;
    // case "ACCESS_DATA":

    default:
      break;
  }
};

export default reducer;
