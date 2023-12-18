import Sidebor from "../layout/Sidebar";
import { Navigate, useNavigate } from "react-router-dom";

const UserDataTable=({active,setActive})=>{
    const navigate = useNavigate();
    return(
        <>
           <div className="row">
        <div className="col-2">
        <Sidebor active={active} setActive={setActive}  />
        </div>
        <div className=" col-10 p-2 mb-5 rounded ">
          <div className="bg-white mt-4 p-3 ">
            <div className="row">
              <div className="col-9">
                <p href="#" className=" d-flex justify-content-start   ">
                  <h5 className=" text-secondary me-1 ">UserDataTable </h5>&#10095;
                  <h5 className="text-black ms-1 ">Customer Details</h5>{" "}
                </p>
         
      </div> 
      <div className="col-3">
                <div className=" d-flex justify-content-end ">
                  <button
                    className="btn commit text-white mb-3 "
                    onClick={() => navigate("/userdata")}
                    type="button"
                  >
                    Add
                  </button>
                </div>
              </div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">E-MAIL</th>
      <th scope="col">PHONENUMBER</th>
      <th scope="col">MESSAGE</th>
      <th scope="col">ACTIONS</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
       </div>
      </div>
      </div>
      </div>
  
        </>
        
    )
}
export default UserDataTable;