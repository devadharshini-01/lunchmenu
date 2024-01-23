import { Icon } from "@iconify/react";
import Sidebor from "../layout/Sidebar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/image/sidebarimage.png";
import Searchbar from "../layout/Searchbar";
import Header from "../layout/Header";

const Lunch = ({ active, setActive, changeArr, setChangeArr }) => {
  const navigate = useNavigate();

  const tableRowRemove = (i) => {
    console.log(i);
    const dataRow = [...changeArr];
    dataRow.splice(i + 1, 1);
    setChangeArr(dataRow);
    console.log(dataRow);
    toast.success("Deleted successfully!");
  };

  const handlePageClick = () => {};

  return (
    <>
      <div class="overflow-hidden ">
        <div className="row vh-100">
          <div className="col-2 d-none d-sm-none d-md-block d-lg-block">
            <Sidebor active={active} setActive={setActive} />
          </div>

          <div className=" col-sm-12 col-md-10 col-lg-10   rounded ">
       
            <Header active={active} setActive={setActive}/>
            <div className="bg-white p-3  ">
              <div className="row">
                <div className="col-sm-2 col-md-12 col-lg-12">
                  <div className=" d-flex justify-content-end ">
                    <button
                      className="btn add-btn-color text-white mb-3  "
                      onClick={() => navigate("/Add-lunch")}
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
                <div className="  col-sm-3 col-md-3 col-lg-3">
                  <Searchbar />
                </div>
              </div>
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col" className="tableheading">
                        S.NO
                      </th>
                      <th scope="col" className="tableheading">
                        NAME
                      </th>
                      <th scope="col" className="tableheading">
                        E-MAIL
                      </th>
                      <th scope="col" className="tableheading">
                        PHONENUMBER
                      </th>
                      <th scope="col" className="text-center tableheading">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(changeArr) &&
                      changeArr.map((data, i) => {
                        return (
                          <tr key={i}>
                            <th scope="row">{i + 1}</th>

                            <td className="idea">{data.Name}</td>
                            <td className="idea">{data.email}</td>
                            <td className="idea">{data.phoneNumber}</td>
                            <td>
                              <div className="row d-flex  justify-content-center  ">
                                <Icon
                                  icon="tabler:edit"
                                  width="18"
                                  height="18"
                                  className="w-25 label "
                                  onClick={() => navigate("/Add-lunch")}
                                />
                                <Icon
                                  icon="pajamas:remove"
                                  width="18"
                                  height="18"
                                  className="w-25 label "
                                  onClick={() => tableRowRemove(i)}
                                />
                                <Icon
                                  icon="zondicons:view-show"
                                  width="18"
                                  height="18"
                                  className="w-25 label "
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}

                    {/*       
               <ReactPaginate
                   previousLabel={'previous'}
                   nextLabel={'next'}
                   pageCount={2}
                   onPageChange={handlePageClick}
                   pageRangeDisplayed={10}
                   containerClassName={'pagination '}
                   pageClassName={'page-item px-0'}
                   pageLinkClassName={'page-link'}
                   previousClassName={'page-item px-0'}
                   previousLinkClassName={'page-link'}
                   nextClassName={'page-item px-0'}
                   nextLinkClassName={'page-link'}
                   activeClassName={'active'}
               
               
               />   */}
                  </tbody>
                  <div />
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
export default Lunch;
