import React from "react";
import logo from "../assets/image/logo.png";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    // body:"JSON.stringify",
  });
  const navigate = useNavigate();
  const handlelogin = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    axios
      .post("https://fts-backend.onrender.com/admin/login", login)
      .then((response) => {
        console.log(response.data.accesstoken);
       
        localStorage.setItem(
          "accessToken",
          response.data.accesstoken.accessToken
        );
        
        localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshtoken));
        if (response.status === 200) {
          navigate("/breakfast");
        }
      })

      .catch((err) => {
        console.log(err);
        if (err.status === 400) {
          navigate("/");
        }
      });

};

  return (
    <div className="homebanner">
      <div className="row h-100 ">
        <div className="row">
       
        </div>
        <div className="col-6 align-items">
       
          <div className="card card-color p-4">
            <div className="d-flex flex-column mb-0 mb-0">
              <img className="logo-width" src={logo}></img>
            </div>
            <p className="text-white font-style ">Welcome To Foodingo</p>
            <p className="fontcolor-style ">Deliver Food Instanly</p>
            <div className="row mt-5">
              <div className="col-6 mt-5">
                <p className="text-white cursor-pointer text-start ">
                  ©2017. Foogingo. Inc
                </p>
              </div>
              <div className="col-6 mt-5 ">
                <p className="word-spacing text-white ">About Terms Privacy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 display-flex ">
          <div>
            <p className="text-color">
              <span className="login">Login</span> to your account to manage all
              the
              <br></br> service and explore our tools.
            </p>
            <div className="card card-border p-3">
              <input
                type="text"
                className="outline-size-border text-black "
                name="email"
                placeholder="Email"
                onChange={(e) => handlelogin(e)}
              />
              <div className="input-group ">
                <input
                  type="password"
                  className="outline-size-border border-0 text-black flex-grow-1 "
                  name="password"
                  placeholder="Password"
                  aria-label="Recipient's username"
                  onChange={(e) => handlelogin(e)}
                  aria-describedby="basic-addon2"
                />

                <span
                  className="input-group-text border-0 bg-white  "
                  id="basic-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 64 64"
                  >
                    <g fill="#ff5a79">
                      <path d="M30.2 2.1C18.6 2.8 12.5 9.4 12 21.3h11.7c.1-4.1 2.5-7.2 6.7-7.7c4.2-.4 8.2.6 9.4 3.4c1.3 3.1-1.6 6.7-3 8.2c-2.6 2.8-6.8 4.9-9 7.9c-2.1 3-2.5 6.9-2.7 11.7h10.3c.1-3.1.3-6 1.7-7.9c2.3-3.1 5.7-4.5 8.5-7c2.7-2.3 5.6-5.1 6-9.5C53.3 7.5 42.7 1.3 30.2 2.1" />
                      <ellipse cx="30.5" cy="55.6" rx="6.5" ry="6.4" />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <button
              className=" btn text-white mt-4"
              onClick={() => handleSubmit()}
            >
              Login 
            </button>
          </div>
   </div>
        </div>
      </div>
  
  );
};
export default Login;
