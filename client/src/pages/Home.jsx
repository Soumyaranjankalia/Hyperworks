import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const loginData = localStorage.getItem("login");
  console.log(loginData)
  const token = localStorage.getItem("token");
  const user_name = localStorage.getItem("user_name");

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login");
  };

  return (
    <div>
      <h3>Welcome</h3>
      {/* <span>{loginData}</span> */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
