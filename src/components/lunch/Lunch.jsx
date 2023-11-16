import Sidebor from "../breakfast/Sidebar";
import { Icon } from "@iconify/react";
const Lunch = () =>{
    return(
<>
<div className="row">
        <div className="col-2 ">
          <Sidebor />
        </div>
        
       
        <div className=" col-10 mix p-3 mb-5 rounded ">
          <div className="bg-white mt-4 p-3 ">
            <div className="row">
              <div className="col-9">
                <p href="#" className=" d-flex justify-content-start   ">
                  <h5 className=" text-secondary me-1 ">Lunch </h5>&#10095;
                  <h5 className="text-black ms-1 ">Customer Details</h5>{" "}
                </p>
              </div>
              <div className="col-3">
                <div className=" d-flex justify-content-end ">
                  <button
                    className="btn text-white mb-3"
                   
                    
                    type="button"
                  >
                    <span>
                      <Icon
                        icon="carbon:add-filled"
                        className="mb-1  "
                        width="12"
                        height="12"
                      />
                    </span>
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
                <tr>
                  <th scope="row">1</th>
                  <td className="idea">derhgyfg24@gmail.com</td>
                  <td className="idea">bnjui</td>
                  <td className="idea">8967542311</td>
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
                        className="w-25  "
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
                <tr>
                  <th scope="row">2</th>
                  <td className="idea">jhgjfysa@gmail.com</td>
                  <td className="idea">asdx</td>
                  <td className="idea">9087654321</td>
                  <td>
                    <div className=" d-flex  justify-content-center ">
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
                        className="w-25  "
                      />
                      <Icon
                        icon="zondicons:view-show"
                        width="18"
                        height="18"
                        className="w-25 "
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td className="idea">jgbbcrse@gmail.com</td>
                  <td className="idea">vbhcvf</td>
                  <td className="idea">4532087642</td>
                  <td>
                    <div className=" d-flex  justify-content-center ">
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
                        className="w-25  "
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
              </tbody>
              <div />
            </table>
          </div>
       </div>
        </div>
    
</>
    )
}
export default Lunch;