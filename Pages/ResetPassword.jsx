import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const{id,randomString}= useParams();

    const handleSubmit=async(e)=>{
        try{
            e.preventDefault();
            const res= await axios.post(`https://backend-user-authentication.onrender.com/api/auth/reset-password/${id}/${randomString}`,{password,});
            toast.success(res.data.message);
            navigate("/login");
        }catch(error){
            toast.error(error.response.data.message)
        }
    };

    return (
    <div className="container col-md-5 card mt-5 shadow p-4">
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="password" className="form-label fw-bold fs-5">Password</label>
          <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Your Password"
            required
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye />:<FaRegEyeSlash />} 
          </button>
          </div>
        </div>
        <br></br>
        <button className="btn btn-primary" type="submit">Update Password</button>
      </form>
    </div>
    );
};

export default ResetPassword;