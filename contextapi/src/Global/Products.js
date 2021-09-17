import React, { useContext } from "react";
import "./Styles/Products.css";
import { ProductsContext } from "./ContextProvider";
import { CartContext } from "./CartContext";

const Products = () => {
  const { dispatch, cart } = useContext(CartContext);
  const { Products } = useContext(ProductsContext);
  return (
    <div className="gallary">
      {Products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <img src={product.image} alt="image not found" />
            <h3>{product.name}</h3>
            <p>${product.price}.00</p>
            {/* <h4>{product.status}</h4> */}
            {product.status === "hot" ? <div className="hot">HOT</div> : ""}
            {product.status === "new" ? <div className="new">NEW</div> : ""}

            <button
              className="add-to-cart"
              onClick={() =>
                dispatch({
                  type: "add",
                  id: product.id,
                  product,
                })
              }
            >
              ADD TO CART
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
