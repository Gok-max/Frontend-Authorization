import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPaaword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const  payload  = { name, email, password };
      const res = await axios.post(
        "https://backend-user-authentication.onrender.com/api/auth/register",
        payload
      );
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setEmail("");
    setPassword("");
    setName("");
  };
 
  return (
    <div className="container col-md-5 mt-5 card p-4 shadow">
        <h2 className="row justify-content-center mb-3">𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-secondary fw-bold fs-5">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your FullName"
            required
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div  className="mb-3">
          <label htmlFor="email" className="form-label text-secondary fw-bold fs-5">Email</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter Your Email Id"
            required
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-secondary fw-bold fs-5">Password</label>
          <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            placeholder="Enter your password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPaaword(!showPassword)}>
            {showPassword ? <FaRegEye />:<FaRegEyeSlash />}
          </button>
          </div>
        </div>
        <div>
        <button type="submit" className="btn btn-primary w-100">Register</button>
        </div>
        <div className="text-center mt-3">
        <Link to={"/login"} > Already Have An Account ? Login </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;