import React, { useEffect, useState } from "react";
import PrimartyCta from "./../../components/StyledComponent/PrimaryCTA";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from "../../reducer/CartReducer";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);
  const { cartItems } = useSelector((state) => state.Cart);

  console.log("cartITems", cartItems);

  const handleAddtoCart = () => {
    dispatch(setCartItems([...cartItems, { ...item, qty: 1 }]));
  };

  useEffect(() => {
    let searchIndex = cartItems.findIndex((e) => e.id === item?.id);
    if (searchIndex !== -1) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartItems]);

  return (
    <div className="product-card">
      <div className="title">
        <h1>{item?.name} </h1>
      </div>
      <div className="info">
        <img src="https://picsum.photos/200" alt="" />
        <div className="description">
          <p>{item.description}</p>
        </div>
      </div>
      {inCart ? (
        <PrimartyCta>{"In Cart"}</PrimartyCta>
      ) : (
        <PrimartyCta
          onClick={handleAddtoCart}
        >{`Buy Now @Rs.${item?.price} `}</PrimartyCta>
      )}
    </div>
  );
};

export default function ProductList({ data }) {
  console.log("data", data);
  return (
    <div className="product-card-container">
      {data?.map((item) => (
        <ProductCard item={item} key={item?.id} />
      ))}
    </div>
  );
}
