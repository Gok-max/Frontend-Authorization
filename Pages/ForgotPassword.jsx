import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    const handleSubmit =async(e)=>{
        try{
            e.preventDefault();
            const res = await axios.post("https://backend-user-authentication.onrender.com/api/auth/forgot-password",{email})
            toast.success(res.data.message);
            navigate("/login")
        }catch(error)
        {
            console.log(error);
            toast.error(error.response.data.message);
        }
        setEmail("");
    }
    return (
        <div className="container col-md-5 mt-5 card shadow p-5">
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="email" className="form-label fw-bold fs-5">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email Id"
              required
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <button  className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    );
};

export default ForgotPassword;