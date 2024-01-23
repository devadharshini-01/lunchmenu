import { Icon } from "@iconify/react";
import Sidebor from "../layout/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchbar from "../layout/Searchbar";
import Header from "../layout/Header";
import { useSelector, useDispatch } from "react-redux";
import { DashboardGetAction } from "../redux/actions/DashboardApiAction";

const UserDataTable = ({ active, setActive }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboard.dashboardgetapi);
  console.log("data::", data);
  const [store] = useState([]);

  useEffect(() => {
    dispatch(DashboardGetAction());
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products/?limit=5")
  //     .then((response) => {
  //       setStore(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <>
      <div class="overflow-hidden">
        <div className="row vh-100">
          <div className="col-2 d-none d-sm-none d-md-block d-lg-block ">
            <Sidebor active={active} setActive={setActive} />
          </div>
          <div className=" col-sm-12 col-md-10 col-lg-10  rounded ">
            <Header active={active} setActive={setActive} />
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
