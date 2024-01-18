import { Button } from "react-bootstrap";
import Sidebar from "../../layout/Sidebar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/image/sidebarimage.png";
import { Icon } from "@iconify/react";

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
          <div className=" rounded image-color p-4  d-flex  d-sm-block d-md-none d-lg-none">
            <div className="col-10 ">
              <img src={logo} className="image-width" />
            </div>

            <div className="col-2 ">
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <Icon
                  className="text-white"
                  icon="heroicons:bars-3-20-solid"
                  width="30"
                  height="30"
                />
              </a>

              <div
                className="offcanvas offcanvas-start w-75"
                tabindex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header">
                  <h5
                    className="offcanvas-title text-white"
                    id="offcanvasExampleLabel"
                  >
                    Offcanvas
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>

                <div class="offcanvas-body">
                  <div>
                    <div className="row sidebar ">
                      <div className=" p-3 mb-5 rounded">
                        <img
                          src={logo}
                          className=" d-flex justify-content-center logo  "
                        />
                        <div className="list-group mt-3 ">
                          <Link to="/breakfast">
                            {" "}
                            <p
                              className={`${
                                active === "breakfast"
                                  ? "p-2 bg-white rounded-3  text-danger"
                                  : "text-white"
                              } p-2 fontsize hover  `}
                              onClick={() => setActive("breakfast")}
                            >
                              <Icon
                                className="me-2"
                                icon="material-symbols-light:no-meals-rounded"
                                width="20"
                                height="20"
                              />
                              Breakfast
                            </p>
                          </Link>
                          <Link to="/lunch">
                            {" "}
                            <p
                              className={`${
                                active === "lunch"
                                  ? " p-2 bg-white rounded-3  text-danger"
                                  : "text-white"
                              } p-2 hover   fontsize `}
                              onClick={() => setActive("lunch")}
                            >
                              <Icon
                                className="mb-1 me-2"
                                icon="cil:dinner"
                                width="20"
                                height="20"
                              />
                              Lunch
                            </p>
                          </Link>

                          <Link to="/dinner">
                            {" "}
                            <p
                              className={`${
                                active === "dinner"
                                  ? " p-2 bg-white rounded-3 text-danger"
                                  : "text-white"
                              } p-2 hover  fontsize `}
                              onClick={() => setActive("dinner")}
                            >
                              <Icon
                                className="mb-1 me-2"
                                icon="mdi:dinner"
                                width="20"
                                height="20"
                              />
                              Dinner
                            </p>
                          </Link>

                          <Link to="/User-data-table">
                            <p
                              className={`${
                                active === "User-data-table"
                                  ? " p-2 bg-white rounded-3  text-danger"
                                  : "text-white"
                              } p-2 hover   `}
                              onClick={() => setActive("User-data-table")}
                            >
                              <Icon
                                icon="uil:chat-bubble-user"
                                width="20"
                                height="20"
                                className="me-2 mb-1"
                              />
                              User DataTable
                            </p>
                          </Link>

                          <Link to="/fts-data-table">
                            {" "}
                            <p
                              className={`${
                                active === "Ftsdatatable"
                                  ? " p-2 bg-white rounded-3 text-danger"
                                  : "text-white"
                              } p-2 hover  `}
                              onClick={() => setActive("Ftsdatatable")}
                            >
                              <Icon
                                icon="gridicons:multiple-users"
                                className="mb-1 me-2"
                                width="20"
                                height="20"
                              />
                              Ftsdatatable
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <label className="block mt-4">Name:</label>
          <input className="form-control " />

          <label className="mt-2 block">E-mail :</label>
          <input className="form-control " />

          <label className="mt-2 block">PhoneNumber :</label>
          <input type="number" className="form-control position" />
          <label className="mt-2 block">Message :</label>
          <textarea className="form-control textarea " />
          {/* <div className="d-grid gap-2 d-md-flex justify-content-end">
            <button className=" btn text-block bg-white   btn-outline-dark mt-2">
              Cancel
            </button>
            <button className=" btn text-white buttoncolor mt-2">Submit</button>
          </div> */}
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
