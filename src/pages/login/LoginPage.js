import React, { useState } from "react";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";
import FromLogin from "../../features/login/FromLogin";
import serviceCallApi from "../../services/serviceApi";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await serviceCallApi("login", "POST", data);
      console.log(
        "🚀 ~ file: LoginPage.js ~ line 16 ~ onSubmit ~ result",
        result
      );
      setLoading(false);
      localStorage.setItem("userInfo", JSON.stringify(result));
      /// dispath action login
      navigate("/");
    } catch (error) {
      console.log(
        "🚀 ~ file: LoginPage.js ~ line 25 ~ onSubmit ~ error",
        error
      );
      setLoading(false);
      alert(error.message);
    }
    // Sau khi call Api thanh cong, back ve home, va lưu thông tin người dùng trong Localstorage
    // Dùng redux toolkit dispatch Action login success => return => Locastorage
    // Khi Logout xóa Localstorage
  };

  return (
    <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="text-center my-5">
              <h1>Login </h1>
            </div>
            <div className="card shadow-lg">
              <div className="card-body p-5">
                {loading ? (
                  <div className="text-center d-flex justify-content-center">
                    <ReactLoading
                      type="spin"
                      color="blue"
                      height={"20%"}
                      width={"20%"}
                    />
                  </div>
                ) : (
                  <FromLogin onSubmit={onSubmit} />
                )}
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Already have an account?{" "}
                  <Link to="/register" className="text-dark">
                    Register
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-5 text-muted">
              Copyright © 2017-2021 — Your Company
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
