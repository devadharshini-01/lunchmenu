import Sidebor from "../layout/Sidebar";
import { Icon } from "@iconify/react";
import { useState } from "react";
import logo from "../assets/image/sidebarimage.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "../layout/Searchbar";
const Breakfast = ({
  datalist,
  active,
  setActive,
  inputArr,
  setInputArr,
  Search,
}) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  // const [deleterecord, setDeleteRecord] = useState(false);
  // const [deletekey, setDeleteKey] = useState(false);

  // const [modelData, setModelData] = useState({
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   index: "",
  //   deleteName: "",
  //   deleteconform: "",
  // });
  // // console.log(modelData.name)
  // // console.log(modelData.email)
  // // console.log(modelData.phoneNumber,"phoneNumber")
  // const handlemodeldata = (e) => {
  //   setView(true);
  //   console.log(view);
  //   setDeleteKey(true);
  //   // setModelData({ ...modelData, [e.target.name]: e.target.value });
  //   // console.log(e.name)
  //   setModelData((pre) => ({ ...pre, name: e.name }));
  //   // console.log(e.email)

  //   setModelData((pre) => ({ ...pre, email: e.email }));
  //   console.log(e.phoneNumber);
  //   setModelData((pre) => ({ ...pre, phoneNumber: e.phoneNumber }));
  // };

  // const handeldelete = (i, name) => {
  //   setDeleteRecord(true);
  //   // console.log(i, "hai");
  //   console.log(name, "hello");
  //   setModelData((pre) => ({ ...pre, index: i }));

  //   setModelData((pre) => ({ ...pre, deleteName: name }));

  //   console.log(view);
  // };
  // const tableRowRemove = (i) => {
  //   console.log(i);
  //   const dataRow = [...inputArr,i];
  //  dataRow.splice(index + 1, 1);
  //   setInputArr(dataRow);
  //   console.log(dataRow);
  //   toast.success("Deleted successfully!");

  const handlePageClick = (data) => {
    console.log(data.selected);
  };
  return (
    <>
      <div class="overflow-hidden ">
        <div className="row vh-100">
          <div className="col-2 d-none d-sm-none d-md-block d-lg-block">
            <Sidebor active={active} setActive={setActive} />
          </div>
          <div className=" col-sm-12 col-md-10 col-lg-10  rounded ">
            <div className="  rounded image-color p-4  d-flex  d-sm-block d-md-none d-lg-none">
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
                  className="offcanvas offcanvas-start w-75 offcanvas"
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

                  <div className="offcanvas-body">
                    <div>
                      <div className="row sidebar h-100">
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
                                    ? " p-2 bg-white rounded-3  text-danger"
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
            <div className="bg-white   p-3 ">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className=" d-flex justify-content-end ">
                    <button
                      className="btn add-btn-color text-white mb-3 "
                      onClick={() => navigate("/Add-breakfast")}
                      type="button"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className=" col-sm-9 col-md-9 col-lg-9">
                  <p className="customerdetail">CUSTOMER DETAILS</p>
                </div>
                <div className=" col-sm-3 col-md-3 col-lg-3">
                  <Searchbar />
                </div>
              </div>
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th className="tableheading">S.NO</th>
                      <th className="tableheading">NAME</th>
                      <th className="tableheading">E-MAIL</th>
                      <th className="tableheading">PHONENUMBER</th>
                      <th className="text-center tableheading">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(inputArr) &&
                      inputArr.map((val, i) => (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>

                          <td className="textsize">{val.Name}</td>

                          <td className="textsize">{val.email}</td>
                          <td className="textsize">{val.phoneNumber}</td>

                          <td>
                            <div className="row d-flex  justify-content-center  ">
                              <Icon
                                icon="tabler:edit"
                                width="18"
                                height="18"
                                className="w-25 pointer "
                                onClick={() => navigate("/Add-breakfast")}
                              />
                              <Icon
                                icon="pajamas:remove"
                                width="18"
                                height="18"
                                className="w-25 pointer "
                                // onClick={() => handeldelete(i, val.name)}
                              />
                              <Icon
                                icon="zondicons:view-show"
                                width="18"
                                height="18"
                                className="w-25  pointer"
                                // onClick={() => handlemodeldata(val)}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}

                    {/* <div className="row d-flex justify-content-end w-100">
                  <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    pageCount={2}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={10}
                    containerClassName={"pagination "}
                    pageClassName={"page-item px-0"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item px-0"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item px-0"}
                    nextLinkClassName={"page-link"}
                    activeClassName={"active"}
                  />
                </div> */}
                  </tbody>

                  {/* <div /> */}
                </table>
              </div>

              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breakfast;
