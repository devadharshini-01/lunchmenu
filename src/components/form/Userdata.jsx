import { Button } from "react-bootstrap";
import Sidebar from "../../layout/Sidebar";
import { Navigate,useNavigate } from "react-router-dom";

const Userdata =({active,setActive})=>{
    
    const navigate = useNavigate();
    return(
        <>
      <div className="row">
        <div className="col-2">
        <Sidebar active={active} setActive={setActive}  />
        </div>

        <div className="col-10">
    
  <ol className="breadcrumb divider">
    <li className="breadcrumb-item"><a href="#">UserData</a></li>
    <li className="breadcrumb-item active" aria-current="page">PersonalDetails</li>
  </ol>

         <div className="card mt-3 p-4">
         <label>Name:</label>
         <input className="form-control "/>
         <label className="mt-2">E-mail</label>
         <input className="form-control "/>
         <label className="mt-2">phoneNumber</label>
         <input className="form-control "/>
         <label className="mt-2">message</label>
         <textarea className="form-control "/>
         <div className="d-grid gap-2 d-md-flex justify-content-end">
         <button className=" btn text-white"  onClick={()=>navigate("/UserDataTable")} >Submit</button>
         <button className=" btn text-white" >Cancel</button>
        </div>
         </div>
        </div>
      
      </div>
     
        </>
    )
}
export default Userdata;