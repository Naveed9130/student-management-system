import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/landing/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Dashboard from "../pages/admin/Dashboard";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />
        {/* We'll add these after creating the pages */}
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;