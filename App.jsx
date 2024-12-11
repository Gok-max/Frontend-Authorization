import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Register from './Pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './Pages/ForgotPassword';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';

const App = () => {
  const [token ,setToken] = useState('')
  return (
    <div>
      <div>
        <ToastContainer/>
      </div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login setToken={setToken}/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id/:randomString" element={<ResetPassword/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;