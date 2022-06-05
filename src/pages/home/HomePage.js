import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import serviceCallApi from "../../services/serviceApi";
import MainLayout from "./../main";
import { useCart } from "react-use-cart";
import { userData } from "./../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  getListProduct,
  selectProduct,
} from "../../features/product/productSlice";
import ReactLoading from "react-loading";

const HomePage = () => {
  /// get du lieu
  const navigate = useNavigate();
  const { addItem } = useCart();
  const dispatch = useDispatch();
  const { loading, data } = useSelector(selectProduct);

  useEffect(() => {
    getProductList();
  }, []);
  const getProductList = async () => {
    try {
      await dispatch(getListProduct());
    } catch (error) {
      console.log(error);
    }
  };

  const gotoCart = (data) => {
    addItem(data, parseInt(1));
    navigate("/cart");
  };
  const renderProduct = () => {
    if (data.length) {
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
          <div className='row' key={index}>
            <div className='col-4'>
              {" "}
              <button
                className='btn btn-success btn-sm'
                onClick={() => gotoCart(data)}
              >
                Add to Cart
              </button>
              <Link to={`/${product.id}/${product.slug}`}>
                <h2> {product.name}</h2>

                <img
                  src={product.avatar}
                  className='img-thumbnail'
                  alt={product.name}
                />
              </Link>
              {product.price}
            </div>
          </div>
        );
      });
    }
  };

  const LayoutHomePage = () => {
    return (
      <>
        {loading ? (
          <div className='text-center d-flex justify-content-center'>
            <ReactLoading
              type='spin'
              color='blue'
              height={"20%"}
              width={"20%"}
            />
          </div>
        ) : (
          <div>
            <h1>Home Page</h1>
            <h2> {userData ? userData.name : null} </h2>
            <div className='container'>test {renderProduct()}</div>
          </div>
        )}
      </>
    );
  };
  return <MainLayout content={<LayoutHomePage />} />;
};

export default HomePage;
