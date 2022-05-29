import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import serviceCallApi from "../../services/serviceApi";
import MainLayout from "./../main";
import { useCart } from "react-use-cart";

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
  const navigate = useNavigate();

  useEffect(() => {
    getProductList();
  }, []);
  const [data, setData] = useState([]);
  const { addItem } = useCart();

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

  const gotoCart = (data) => {
    addItem(data, parseInt(1));
    navigate("/cart");
  };
  const renderProduct = () => {
    return data.map((product, index) => {
      const data = {
        id: product.id,
        name: product.name,
        price: product.price,
        avatar: product.avatar,
        detail: product.detail,
        cate_id: product.cate_id,
      };
      return (
        <div className="row" key={index}>
          <div className="col-4">
            {" "}
            <button
              className="btn btn-success btn-sm"
              onClick={() => gotoCart(data)}
            >
              Add to Cart
            </button>
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
