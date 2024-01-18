import { Icon } from "@iconify/react";
import Sidebor from "../layout/Sidebar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Searchbar from "../layout/Searchbar";
import logo from "../assets/image/sidebarimage.png";

const UserDataTable = ({ active, setActive }) => {
  const navigate = useNavigate();
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/?limit=5")
      .then((response) => {
        setStore(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div class="overflow-hidden">
        <div className="row vh-100">
          <div className="col-2 d-none d-sm-none d-md-block d-lg-block ">
            <Sidebor active={active} setActive={setActive} />
          </div>
          <div className=" col-sm-12 col-md-10 col-lg-10  rounded ">
            <div className="  rounded image-color  p-4 d-flex  d-sm-block d-md-none d-lg-none">
              <div className="col-10 ">
                <img src={logo} className="image-width" />
              </div>
              <div className="col-2">
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
                  class="offcanvas offcanvas-start w-75"
                  tabindex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div class="offcanvas-header">
                    <h5
                      class="offcanvas-title text-white"
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
                      <div className="row sidebar h-100 ">
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
            <div className="bg-white  p-3 ">
              <div className="row">
                <div className="col-12">
                  <div className=" d-flex justify-content-end ">
                    <button
                      className="btn add-btn-color text-white mb-3 "
                      onClick={() => navigate("/userdata")}
                      type="button"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className=" col-sm-9 col-md-9 col-lg-9">
                    <p className="customerdetail">PRODUCT DETAILS</p>
                  </div>
                  <div className="col-sm-3 col-md-3 col-lg-3 mb-2">
                    <Searchbar />
                  </div>
                </div>
                <div className="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th className="tableheading">S.NO</th>
                        <th className="tableheading">CATEGORY</th>
                        <th className="tableheading">TITLE</th>
                        <th className="tableheading">RATING</th>
                        <th className="tableheading">PRICE</th>
                        <th className="tableheading text-center">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(store) &&
                        store.map((val, i) => {
                          return (
                            <tr key={i}>
                              {console.log(val)}
                              <th scope="row">{i + 1}</th>

                              <td className="idea">{val.category}</td>

                              <td className="idea">{val.title}</td>
                              <td className="idea">{val.rating.rate}</td>
                              <td className="idea">{val.price}</td>
                              {/* <td className="idea">{val.message}</td> */}

                              <td>
                                <div className="row d-flex  justify-content-center  ">
                                  <Icon
                                    icon="tabler:edit"
                                    width="30"
                                    height="30"
                                    className="w-25 label "
                                  />
                                  <Icon
                                    icon="pajamas:remove"
                                    width="30"
                                    height="30"
                                    className="w-25 label "
                                  />

                                  <Icon
                                    icon="zondicons:view-show"
                                    width="30"
                                    height="30"
                                    className="w-25 label "
                                  />
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDataTable;
