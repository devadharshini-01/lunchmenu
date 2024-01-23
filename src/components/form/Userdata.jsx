import { Button } from "react-bootstrap";
import Sidebar from "../../layout/Sidebar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/image/sidebarimage.png";
import { Icon } from "@iconify/react";
import Header from "../../layout/Header";

const Userdata = ({ active, setActive }) => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log();
      });
  }, []);

  return (
    <>
      <div className="row vh-100">
        <div className="col-2 d-none d-sm-none d-md-block d-lg-block">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <div className=" col-sm-12  col-md-10 col-lg-10">
        <Header active={active} setActive={setActive}/>

          <label className="block mt-4">Name:</label>
          <input className="form-control " />

          <label className="mt-2 block">E-mail :</label>
          <input className="form-control " />

          <label className="mt-2 block">PhoneNumber :</label>
          <input type="number" className="form-control position" />
          <label className="mt-2 block">Message :</label>
          <textarea className="form-control textarea " />
       
          <div className=" gap-2 d-flex justify-content-end">
            <button
              className="  btn p-2  bg-white mt-2  btn-outline-dark"
              onClick={() => navigate("/User-data-table")}
              type="button"
            >
              Cancel
            </button>
            <button
              className="btn mt-2 me-md-2 buttoncolor text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Userdata;
