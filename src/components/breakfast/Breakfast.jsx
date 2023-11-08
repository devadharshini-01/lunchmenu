import Header from "./Header";
import Sidebor from "./Sidebor";
import { Icon } from "@iconify/react";
const Breakfast = () => {
  return (
    <>
      <div className="breakfast   ">
        <Header />
        <div className="row ">
          <div className="col-2  ">
            <Sidebor />
          </div>
       
          <div className="col-10  ">
          
          <p href="#" className=" d-flex justify-content-start mt-3 text-secondary"><h5 className=" text-black me-1">Breakfast </h5>&#10095;<h5 className="text-black ms-1 ">Customer Details</h5> </p>
          {/* <a href="#" className="action message text-black d-flex justify-content-end  "><Icon icon="gg:add" width="12" height="12" className="mt-1" />Add Breakfast</a> */}
           <div className=" d-flex justify-content-end ">
  <button className="btn " type="button">Add</button></div> 
           
              <h6 className="card-header data">Customer Details</h6>
              <div className="card-body  ">
            
              
                <table className="table   p-3 ">
                
                  <table className=" table p-4">
                 
                    <thead>
                      <tr >
                        <th scope="col" className="all">
                          S.no
                        </th>
                        <th scope="col " className="all">
                          E-mail
                        </th>
                        <th scope="col" className="all">
                          Username
                        </th>
                        <th scope="col" className="all">
                          Mobile Number
                        </th>
                        <th scope="col " className="all text-center ">
                          Actions
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
                </table>
              </div>
              </div>
          
        </div>
      </div>
    </>
  );
};

export default Breakfast;
