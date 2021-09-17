const CartReducer = (state, action) => {
  const { ShoppingCart, qty, totalPrice } = state;
  let product;
  let updatedQty;
  let updatedPrice;
  switch (action.type) {
    case "add":
      const check = ShoppingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;
        return {
          ShoppingCart: [product, ...ShoppingCart],
          qty: updatedQty,
          totalPrice: updatedPrice,
        };
      }
    default:
      return state;
  }
};
export default CartReducer;
