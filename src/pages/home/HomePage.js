import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import serviceCallApi from "../../services/serviceApi";
import MainLayout from "./../main";
const HomePage = () => {
  // const info = localStorage.getItem("userInfo")
  //   ? localStorage.getItem("userInfo")
  //   : {};

  // const name = info ? JSON.parse(info) : null;
  // const logout = () => {
  //   /// call Api logout, logout server
  //   ///  Remove browser
  //   localStorage.removeItem("userInfo");
  //   window.location.reload();
  // };

  /// get du lieu
  useEffect(() => {
    getProductList();
  }, []);
  const [data, setData] = useState([]);

  const getProductList = async () => {
    const categoryId = 2;
    const response = await serviceCallApi(
      `products?page=1&limit=10&id=${categoryId}`,
      "GET"
    );
    console.log(
      "🚀 ~ file: HomePage.js ~ line 28 ~ getProductList ~ response",
      response
    );
    setData(response.data.data);
  };

  const renderProduct = () => {
    return data.map((product, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-4">
            <Link to={`/${product.id}/${product.slug}`}>
              <h2> {product.name}</h2>
              <img
                src={product.avatar}
                className="img-thumbnail"
                alt={product.name}
              />
            </Link>
            {product.price}
          </div>
        </div>
      );
    });
  };

  const LayoutHomePage = () => {
    return (
      <>
        <h1>Home Page</h1>
        {/* <h2> {name ? name.name : null} </h2> */}
        {/* {info ? " " : <Link to="/login">Login</Link>}
      {info ? <button onClick={() => logout()}>Logout</button> : ""} */}
        <div className="container">test{renderProduct()}</div>
      </>
    );
  };
  return <MainLayout content={<LayoutHomePage />} />;
};

export default HomePage;
