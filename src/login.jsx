import React from "react";
import logo from "./images/logo.png";

<images></images>;
const Login = () => {
  return (
    <div className="homebanner">
      <div className="row h-100">
        <div className="col-6 end">
          <div className="card font ">
            <div className="cs">
              <img className="pg" src={logo}></img>
            </div>
            <p className="text-white align ms-5 mt-3">Welcome to foodingo</p>
            <p className="image ms-5">Deliver food instanly</p>
            <div className="row">
              <div className="col-6">
                <p className="text-white text text-start ms-5">
                  ©2017. Foogingo. Inc
                </p>
              </div>
              <div className="col-6 ">
                <p className="exam text-white ">About Terms Privacy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 start">
          <div>
            <p className="color">
              <span className="top">Login</span> to your account to manage all
              the
              <br></br> service and explore our tools.
            </p>
            <div className="card ug p-3">
              <label className="ms-2 email ">Email</label>
              <label className="ms-2 mt-3 email">Password </label>
            </div>
            <button className="btn">sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
