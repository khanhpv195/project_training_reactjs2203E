import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const info = localStorage.getItem("userInfo");
  const name = info ? JSON.parse(info) : null;
  console.log("🚀 ~ file: HomePage.js ~ line 5 ~ HomePage ~ info", info);
  const logout = () => {
    /// call Api logout, logout server
    ///  Remove browser
    localStorage.removeItem("userInfo");
    window.location.reload();
  };
  return (
    <div>
      <h1>Home Page</h1>
      <h2> {name ? name.name : null} </h2>
      {info ? " " : <Link to="/login">Login</Link>}
      {info ? <button onClick={() => logout()}>Logout</button> : ""}
    </div>
  );
};

export default HomePage;
