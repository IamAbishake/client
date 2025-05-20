import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import WishList from './components/WishList';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import OtpForgotPassword from './components/OtpForgotPassword';
import OtpResetPassword from './components/OtpResetPassword';
import VerifyOtp from './components/VerifyOtp';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/otp-forgot-password" element={<OtpForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/otp-reset-password" element={<OtpResetPassword />} />


        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="wishlist" element={<WishList />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
