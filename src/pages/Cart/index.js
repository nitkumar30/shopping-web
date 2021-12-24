import React from "react";
import "./Style.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
export default function CartPage() {
  const { cartItems } = useSelector((state) => state.Cart);
  return (
    <div className="cart-page">
      <div className="container">
        <div className="top-bar">
          <h1>
            My Cart <span>{`{${cartItems?.length} items}`}</span>
          </h1>
        </div>
        <div className="cart-item-container">
          {cartItems.map((item, key) => (
            <CartItem item={item} key={item?.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
