import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../../static/images/logo.png";
import Cart from "./../../static/images/cart.svg";
import { useSelector, useDispatch } from "react-redux";
import "./Style.scss";
import { setAuthUser, setIsLogin } from "../../reducer/UserReducer";

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.Cart);
  const { users, authUser, isLogin } = useSelector((state) => state.User);
  console.log("auth User", authUser, isLogin);

  const handleLogout = () => {
    dispatch(setAuthUser({}));
    dispatch(setIsLogin(false));
  };

  return (
    <div className="nav-bar">
      <img className="logo" src={Logo} alt="" />
      <div className="center">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
      </div>

      <div className="right">
        {isLogin ? (
          <div>
            <p>{`Welcome ${authUser.fname}`}</p>{" "}
            <p onClick={handleLogout}>Logout</p>
          </div>
        ) : (
          <div className="links">
            <Link to={"/signup"}>SignUp</Link>
            <Link to={"/login"}>Login</Link>
          </div>
        )}
        <div onClick={() => navigate("/cart")} className="cart">
          <img src={Cart} alt="cart" />
          <p>{cartItems?.length} items</p>
        </div>
      </div>
    </div>
  );
}
