import React, { useState } from "react";
import Input from "../../components/StyledComponent/Inputs";
import PrimartyCta from "../../components/StyledComponent/PrimaryCTA";
import "./Style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, setAuthUser, setIsLogin } from "../../reducer/UserReducer";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { users } = useSelector((state) => state.User);

  console.log("users", users);
  const handleSubmit = (e) => {
    e.preventDefault();
    let searchIndex = users.findIndex(
      (e) => e.email === name && e.password === password
    );
    if (searchIndex !== -1) {
      dispatch(setAuthUser(users[searchIndex]));
      dispatch(setIsLogin(true));
      localStorage.setItem("token", name);
      navigate("/");
    } else {
      dispatch(setAuthUser({}));
      dispatch(setIsLogin(false));
      localStorage.removeItem("token", name);
      alert("Invalid Email and Password");
    }
  };
  return (
    <div>
      <form className="login-container" onSubmit={handleSubmit}>
        <div className="div1">
          <h1>Login</h1>
          <p>Get Access to your Orders, WishLists and Recommendation</p>
        </div>
        <div className="div2">
          <Input
            title="Email"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            title="Password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <PrimartyCta type="submit">Login</PrimartyCta>
        </div>
      </form>
    </div>
  );
}
