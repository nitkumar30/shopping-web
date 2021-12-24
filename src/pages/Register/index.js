import React, { useState } from "react";
import Input from "../../components/StyledComponent/Inputs";
import PrimartyCta from "../../components/StyledComponent/PrimaryCTA";
import { useSelector, useDispatch } from "react-redux";
import { addUser, setAuthUser, setIsLogin } from "../../reducer/UserReducer";
import { useNavigate } from "react-router-dom";
import "./Style.scss";

export default function Register() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const { users } = useSelector((state) => state.User);
  console.log("User", users);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length <= 8) {
      alert("Password must be of 9 characters");
      return;
    }
    if (password !== cnfPassword) {
      alert("Password do not match");
      return;
    }

    const user = {
      fname,
      lname,
      email,
      password,
    };

    dispatch(addUser(user));
    dispatch(setAuthUser(user));
    dispatch(setIsLogin(true));
    navigate("/");

    localStorage.setItem("token", email);
  };
  return (
    <div>
      <form className="login-container" onSubmit={handleSubmit}>
        <div className="div1">
          <h1>Sign Up</h1>
          <p>We do not share your personal data with anyone</p>
        </div>
        <div className="div2">
          <Input
            title="First Name"
            value={fname}
            required
            onChange={(e) => setFname(e.target.value)}
          />
          <Input
            title="Last Name"
            value={lname}
            required
            onChange={(e) => setLname(e.target.value)}
          />
          <Input
            title="Email"
            value={email}
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            title="Confirm Password"
            type="password"
            value={cnfPassword}
            onChange={(e) => setCnfPassword(e.target.value)}
          />
          <PrimartyCta type="submit">Sign Up</PrimartyCta>
        </div>
      </form>
    </div>
  );
}
