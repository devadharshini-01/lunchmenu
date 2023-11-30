import Sidebor from "../layout/Sidebar";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

  const Breakfast = ({datalist,active,setActive,inputArr,setInputArr}) => {
  const navigate = useNavigate();


const tableRowRemove = (i) => {
  console.log(i);
  const dataRow = [...inputArr];
  dataRow.splice(i+1, 1);
  setInputArr(dataRow);
  console.log(dataRow)
};









  return (
    <>
      <div className="row ">
        <div className="col-2 ">
          <Sidebor 
           active={active} setActive={setActive}/>
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
                    className="btn commit text-white mb-3 " onClick={()=>navigate("/Add-breakfast")}
                   
                    
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
             
              { inputArr.map((val,i) => (
                  <tr key={i}>
                  <th scope="row">{i+1}</th>
                 
                  <td className="idea">{val.name}</td>
                  <td className="idea">{val.email}</td>
                  <td className="idea">{val.phoneNumber}</td>
                  <td>
                    <div className="row d-flex  justify-content-center  ">
                      <Icon
                        icon="tabler:edit"
                        width="18"
                        height="18"
                        className="w-25  "
                      />
                      <Icon
                        icon="pajamas:remove"
                        width="18"
                        height="18"
                        className="w-25  "  onClick={() => tableRowRemove()}
                      />
                      <Icon
                        icon="zondicons:view-show"
                        width="18"
                        height="18"
                        className="w-25  "
                      />
                    </div>
                  </td>
                </tr>
                )
               )}

               
              
              </tbody>
              <div />
            </table>
          </div>
       </div>
        </div>
    
    </>
  );
};

export default Breakfast;
