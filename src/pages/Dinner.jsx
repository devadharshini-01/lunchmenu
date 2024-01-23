import { Icon } from "@iconify/react";
import Sidebor from "../layout/Sidebar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/image/sidebarimage.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Searchbar from "../layout/Searchbar";
import Header from "../layout/Header";

const Dinner = ({ active, setActive, arrList, setArrList }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const tableRowRemove = (i) => {
    console.log(i);
    const dataRow = [...arrList];
    dataRow.splice(i + 1, 1);
    setArrList(dataRow);
    console.log(dataRow);
    toast.success("Deleted successfully!");
  };
  const handlePageClick = () => {};
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
      <div class="overflow-hidden">
        <div className="row vh-100">
          <div className="col-2 d-none d-sm-none d-md-block d-lg-block ">
            <Sidebor active={active} setActive={setActive} />
          </div>

          <div className=" col-sm-12 col-md-10 col-lg-10   rounded ">
       <Header active ={active} setActive={setActive}/>
            <div className="bg-white  p-3 ">
              <div className="row">
                <div className="col-12">
                  <div className=" d-flex justify-content-end ">
                    <button
                      className="btn add-btn-color text-white mb-3 "
                      onClick={() => navigate("/Add-dinner")}
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
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <Searchbar />
                </div>
              </div>
              <div className="table-responsive">
                <table class="table">
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
                    {Array.isArray(arrList) &&
                      arrList.map((data, i) => {
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
                                  onClick={() => navigate("/Add-dinner")}
                                />
                                <Icon
                                  icon="pajamas:remove"
                                  width="18"
                                  height="18"
                                  className="w-25  label"
                                  onClick={() => tableRowRemove()}
                                />

                                <Icon
                                  icon="zondicons:view-show"
                                  width="18"
                                  height="18"
                                  className="w-25 label "
                                />

                                <Modal show={show} onHide={handleClose}>
                                  <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <label>Name:</label>
                                    <td className="idea">{data.name}</td>
                                    <label>Email:</label>
                                    <td className="idea">{data.email}</td>
                                    <label>Phone Number:</label>
                                    <td className="idea">{data.phoneNumber}</td>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button
                                      variant="secondary"
                                      onClick={handleClose}
                                    >
                                      OK
                                    </Button>
                                  </Modal.Footer>
                                </Modal>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    {/* <ReactPaginate
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
               
               />
             */}
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
export default Dinner;
