import Sidebor from "../layout/Sidebar";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Model from "./Model";
import DeleteModel from "./DeleteModel";

const Breakfast = ({ datalist, active, setActive, inputArr, setInputArr }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const[view,setView]=useState(false);

   const [modelData,setModelData]=useState({
  name:"",
  email:"",
  phoneNumber:"",
});
const[deleteModel,setDeleteModel]=useState({})

// console.log(modelData.name)
// console.log(modelData.email)
// console.log(modelData.phoneNumber,"phoneNumber")
const handlemodeldata = (e) => {
  setShow(true);
  
  
  
  // setModelData({ ...modelData, [e.target.name]: e.target.value });
  // console.log(e.name)
  setModelData((pre)=>({...pre,name:e.name}))
  // console.log(e.email)


setModelData((pre)=>({...pre,email:e.email}))
  // console.log(e.phoneNumber)
setModelData((pre)=>({...pre,phoneNumber:e.phoneNumber}))
};


  const tableRowRemove = (i) => {
    // console.log(i);
    const dataRow = [...inputArr];
    dataRow.splice(i + 1, 1);
    setInputArr(dataRow);
    console.log(dataRow);
    toast.success("Deleted successfully!");
    setView(true);
  };
  const handlePageClick = (data) => {
    console.log(data.selected);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);



  return (
    <>
      <div className="row ">
        <div className="col-2 ">
          <Sidebor active={active} setActive={setActive} />
        </div>

        <div className=" col-10 p-3 mb-5 rounded ">
          <div className="bg-white mt-4 p-3 ">
            <div className="row">
              <div className="col-9">
                <p href="#" className=" d-flex justify-content-start   ">
                  <h5 className=" text-secondary me-1 ">Breakfast </h5>&#10095;
                  <h5 className="text-black ms-1 ">Customer Details</h5>{" "}
                </p>
              </div>
              <div className="col-3">
                <div className=" d-flex justify-content-end ">
                  <button
                    className="btn commit text-white mb-3 "
                    onClick={() => navigate("/Add-breakfast")}
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
                    NAME
                  </th>
                  <th scope="col" className="all">
                    E-MAIL
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
                {Array.isArray(inputArr) &&
                  inputArr.map((val, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>

                      <td onClick={()=>console.log(i,"jhgyhg")} className="idea">{val.name}</td>
                        
                      <td className="idea">{val.email}</td>
                      <td className="idea">{val.phoneNumber}</td>
                      <td>
                        <div className="row d-flex  justify-content-center  ">
                          <Icon
                            icon="tabler:edit"
                            width="18"
                            height="18"
                            className="w-25 label "
                            onClick={() => navigate("/Add-breakfast")}
                          />
                          <Icon
                            icon="pajamas:remove"
                            width="18"
                            height="18"
                            className="w-25 label "
                            onClick={() => tableRowRemove()}
                          />
                      

                          <Icon
                            icon="zondicons:view-show"
                            width="18"
                            height="18"
                            className="w-25 label "
                            onClick={() => handlemodeldata(val)}
                          />
                       
                        
                        </div>
                      </td>
                    </tr>
                  ))}
                      
                     <Model show={show} setShow={setShow} name={modelData.name} setName={modelData.name} email={modelData.email} setEmail={modelData.email} phoneNumber={modelData.phoneNumber} setPhoneNumber={modelData.phoneNumber}  />
                     <DeleteModel view={view} setView={setView}/>
                <div className="row d-flex justify-content-end w-100">
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
                </div>
              </tbody>

              {/* <div /> */}
            </table>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Breakfast;
