import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DetailPage from "./pages/detail/DetailProduct";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import ThankPage from "./pages/thank/ThankPage";
import UserPage from "./pages/user/UserPage";

function Routing() {
  const userInfo = localStorage.getItem("userInfo");
  const ProtectedRoute = (routerEnd) => {
    if (userInfo === null) {
      return <LoginPage />;
    }
    const routerRedirect = routerEnd.routerEnd;
    switch (routerRedirect) {
      case "checkout":
        return <Checkout />;
      case "thank":
        return <ThankPage />;
      case "profile":
        return <UserPage />;
      default:
        return <HomePage />;
    }
  };
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route
          path='/checkout'
          element={
            <ProtectedRoute routerEnd='checkout'>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path='/thank'
          element={
            <ProtectedRoute routerEnd='thank'>
              <ThankPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/my-profile'
          element={
            <ProtectedRoute routerEnd='profile'>
              <UserPage />
            </ProtectedRoute>
          }
        />
        <Route path='/:product_id/:slug' element={<DetailPage />} />
      </Routes>
    </>
  );
}
export default Routing;
