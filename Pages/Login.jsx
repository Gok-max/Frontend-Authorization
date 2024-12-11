import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit=async(e)=>{
    try{
        e.preventDefault();
        const payload ={email,password}
        const res= await axios.post("https://backend-user-authentication.onrender.com/api/auth/login",payload)
        toast.success(res.data.message)
    }
    catch(error)
    {
        console.log(error);
        toast.error(error.response.data.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container col-md-4 mt-5 card shadow p-4">
    <h2 className="row justify-content-center mb-3 ">𝐋𝐨𝐠𝐢𝐧</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 space-x-2">
          <label htmlFor="Email" className="form-label text-secondary fw-bold fs-5">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email Id"
            required
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mb-4 space-x-2">
          <label htmlFor="Password" className="form-label text-secondary fw-bold fs-5">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
             className="form-control"
            onChange={(e)=>setPassword(e.target.value)}
          ></input>
        <button className="btn border border-black rounded-xl" onClick={()=>setShowPassword(!showPassword)}>
            {showPassword? <FaRegEye />:<FaRegEyeSlash />}
        </button>
        </div>
        <button className="btn btn-primary w-100 mb-3" type="submit">Login</button>
        <br/>
        <div className="text-center mb-2">
        <Link to={"/forgot-password"}>Forgot Password</Link>
      </div>
        <div className="text-center ">
        <Link to={"/"}> Don't Have An Account ? Register</Link>
      </div>
      </form>
    </div>
  );
};

export default Login;