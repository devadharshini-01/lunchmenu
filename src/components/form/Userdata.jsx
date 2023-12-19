import { Button } from "react-bootstrap";
import Sidebar from "../../layout/Sidebar";
import { Navigate,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



const Userdata =({active,setActive})=>{
    const navigate = useNavigate();
    const[update,setUpdate]=useState([]);


  useEffect(()=>{
    axios.post("https://fakestoreapi.com/products",)
    .then((response)=>{
    console.log(response.data);
   
    })
   .catch(()=>{
   console.log()
    })
   },[])

   
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

       <div className="w-75">
       <label className="block mt-2">Name:</label>
         <input className="form-control "/>
         <label className="mt-2 block">E-mail</label>
         <input className="form-control "/>
         <label className="mt-2 block">PhoneNumber</label>
         <input type="number" className="form-control position"/>
         <label className="mt-2 block">Message</label>
         <textarea className="form-control textarea "/>
         <div className="d-grid gap-2 d-md-flex justify-content-end">
         <button className=" btn text-white pink"  onClick={()=>Userdata()} >Submit</button>
         <button className=" btn text-block bg-white" >Cancel</button>
        </div>
       </div>
         
         </div>
        </div>
      

     
        </>
    )
}
export default Userdata;