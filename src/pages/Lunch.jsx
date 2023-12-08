import { Icon } from "@iconify/react";
import Sidebor from "../layout/Sidebar";
import { Navigate, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

 const Lunch = ({active,setActive,changeArr,setChangeArr}) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const tableRowRemove = (i) => {
    console.log(i);
    const dataRow = [...changeArr];
    dataRow.splice(i+1, 1);
    setChangeArr(dataRow);
    console.log(dataRow)
    toast.success("Deleted successfully!")
  };

  const handlePageClick=()=>{

  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
<>
<div className="row">
        <div className="col-2 ">
          <Sidebor   active={active} setActive={setActive}/>
        </div>
        
       
        <div className=" col-10  p-3 mb-5 rounded ">
          <div className="bg-white mt-4 p-3 ">
            <div className="row">
              <div className="col-9">
                <p href="#" className=" d-flex justify-content-start   ">
                  <h5 className=" text-secondary me-1 ">Lunch</h5>&#10095;
                  <h5 className="text-black ms-1 ">Customer Details</h5>{" "}
                </p>
              </div>
              <div className="col-3">
                <div className=" d-flex justify-content-end ">
                  <button 
                    className="btn commit text-white mb-3 " onClick={()=>navigate("/Add-lunch")}
                   
                    
                    type="button"
                  >
                   
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-9">
                <p className="day">CUSTOMER DETAILS</p>
              </div>
              <div className="col-3">
                <form className="d-flex " role="search">
                  <input
                    className="form-control ms-4 "
                    type="search"
                    placeholder="Search "
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col" className="all">
                    S.NO
                  </th>
                  <th scope="col" className="all">
                    E-MAIL
                  </th>
                  <th scope="col" className="all">
                    USERNAME
                  </th>
                  <th scope="col" className="all">
                    MOBILE NUMBER
                  </th>
                  <th scope="col" className="text-center all">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
              
           
                 {Array.isArray(changeArr)&& changeArr.map((data,i) => {
               return( <tr key={i}>
                  <th scope="row">{i+1}</th>
                 
                  <td className="idea">{data.name}</td>
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
                        className="w-25 label " onClick={() => tableRowRemove()}
                      />
                      <Icon
                        icon="zondicons:view-show"
                        width="18"
                        height="18"
                        className="w-25 label "
                        onClick={handleShow}
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
                              <Button variant="secondary" onClick={handleClose}>
                                OK
                              </Button>
                              
                            </Modal.Footer>
                          </Modal>
                    </div>
                  </td>
                </tr>
                  )
                })
               }
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
               
               
               />  

             
              
              </tbody>
              <div />
            </table>
            <ToastContainer />
          </div>
       </div>
        </div>
</>
    )
}
export default Lunch;

    
