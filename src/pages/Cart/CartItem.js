import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PrimartyCta from "../../components/StyledComponent/PrimaryCTA";
import { setCartItems } from "../../reducer/CartReducer";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.Cart);

  const increment = () => {
    let searchIndex = cartItems.findIndex((e) => e.id === item?.id);
    let tempItem = { ...cartItems[searchIndex] };
    tempItem.qty = tempItem.qty + 1;
    let tempcart = [...cartItems];
    tempcart[searchIndex] = tempItem;
    console.log(tempcart);
    dispatch(setCartItems(tempcart));
  };

  const decrement = () => {
    let searchIndex = cartItems.findIndex((e) => e.id === item?.id);
    let tempItem = { ...cartItems[searchIndex] };

    if (tempItem.qty === 1) {
      removeItem();
      return;
    }
    tempItem.qty = tempItem.qty - 1;
    let tempcart = [...cartItems];
    tempcart[searchIndex] = tempItem;
    console.log(tempcart);
    dispatch(setCartItems(tempcart));
  };

  const removeItem = () => {
    let searchIndex = cartItems.findIndex((e) => e.id === item?.id);
    let tempcart = cartItems.filter((e, i) => i !== searchIndex);
    dispatch(setCartItems(tempcart));
  };

  return (
    <div className="cart-item">
      <div className="logo"></div>
      <div className="content">
        <h1> {item.name}</h1>
        <div className="info">
          <div className="left">
            <PrimartyCta onClick={increment}>+</PrimartyCta>
            <p>{item.qty}</p>
            <PrimartyCta onClick={decrement}>-</PrimartyCta>
            <p>
              <span>X</span>{" "}
            </p>
            <p>
              <span>Rs.{item?.price}</span>
            </p>
          </div>
          <div className="right">
            <p>Rs.{item.qty * item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
