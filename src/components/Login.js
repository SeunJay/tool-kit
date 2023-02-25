import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../slices/users";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      login({
        name: "Seun Jaye",
        age: 31,
        email: "seunjay92@gmail.com",
      })
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Login;
