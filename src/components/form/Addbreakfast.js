import Sidebar from "../../layout/Sidebar";
import { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import * as yup from 'yup';

 
const Datalist = ({datalist,setDatalist,active,setActive,inputArr,setInputArr}) => {


  // const [active, setActive] = useState();
  
  const navigate = useNavigate();
  const handledatalist = (e) => {
    setDatalist({ ...datalist, [e.target.name]: e.target.value });
    
  };
  const handleproduct = (event) => {
    if (event.target.checked)
      setDatalist({...datalist, product:[...datalist.product,event.target.value]});
    else {
      const temp = datalist.product.filter(
        (item) => item !== event.target.value
      );
      setDatalist({...datalist,product:temp});
    }
  };
  const handlequantity = (event) => {
    if (event.target.checked)
      setDatalist({...datalist, quantity:[...datalist.quantity,event.target.value]});
    else {
      const temp = datalist.quantity.filter(
        (item) => item !== event.target.value
      );
      setDatalist({...datalist,quantity:temp});
    }
  };


const handleValue=()=>{
  setInputArr([...inputArr,datalist])
 navigate("/breakfast");

}
// console.log(datalist);


  
  return (
    <div className="row ">
      
      <div className="col-2 ">
        <Sidebar active={active} setActive={setActive} />
      </div>

      <div className="col-10  p-3  ">
        <Formik>
        <div className="mx-5">
        <div className="row ">
          <h5 className="bs">Personal Details</h5>
     
           <div className="col-3">
            <label>Name :</label>
            <input className=" form-control box" name="name" value={datalist.name}
            onChange={(e)=>handledatalist(e)} />
           
          </div>
          <div className="col-3">
            <label>Phone Number :</label>
            <input type="number" className=" form-control box" name="phoneNumber" value={datalist.phoneNumber} onChange={(e)=>handledatalist(e)} />
          </div>
          <div className="col-3">
            <label>Date of Birth :</label>
            <input type="date" className="form-control" name="dateofbirth" value={datalist.dateofbirth} onChange={(e)=>handledatalist(e)}/>
          </div>
          <div className="col-3">
              
              <label>E-mail:</label>
              <input className=" form-control box" name="email" value={datalist.email}
              onChange={(e)=>handledatalist(e)} />
              </div>
             
          <div className="row">
            <label className="mt-2 ">Gender :</label>
            
              <div className="row w-50">
           <div className="col-4">
                <div className="form-check ">
                  <input
                    className="form-check-input "
                    type="radio"
                  
                    id="male"
                    name="gender" value="male"onClick={(e)=>handledatalist(e)}
                  />
                  <label
                    className="form-check-label male "
                    for="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                </div>
             
             
              <div className="col-4">
                <div className="form-check  ">
                  <input
                    className="form-check-input "
                    type="radio"
                  
                    id="female"
                    name="gender" value="female"   
                    onClick={(e)=>handledatalist(e)}
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>
       
               <div className="col-4"> 
                <div className="form-check  ">
                  <input
                    className="form-check-input"
                    type="radio"
                   
                    id="others"
                   name="gender" value="others"
                    onClick={(e)=>handledatalist(e)}
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Others
                  </label>
                </div>
              </div>
             
           
           

          </div>
          </div>
          </div>
          
         
       
        <label className=" mt-3  ">Type of food like to have?</label>
        <div className="row w-50">
          <div className="col-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="lunchlist"
                id="veg"
                value="veg"
                 onClick={(e) => handledatalist(e)}
              />
              <label className="form-check-label  " for="price">
                Veg 
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="lunchlist"
                id="Nonveg"
                value="Non-veg"
                 onClick={(e) => handledatalist(e)}
              />
              <label className="form-check-label  " for="price">
                Non veg 
              </label>
            </div>
          </div>
        </div>
       
      {datalist.lunchlist==="veg"? <table className="table mt-3 p-4">
          <thead>
            <tr>
              <th scope="col" className="bs">
                S.no
              </th>
              <th scope="col" className="bs">
                Product
              </th>
              <th scope="col" className="bs">
                Quantity
              </th>
              <th scope="col" className="bs">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
      <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="idely"
                   name="idelyproduct" value={"idely"}
                    onClick={(e)=>handleproduct(e)}
                  />
                <label className="form-check-label" for="flexCheckDefault">
                    Idly
                  </label>
                </div>


              </td> 
              
              <td>
                <input className="form-control w-25" type="number" name="idelyquantity" value={datalist.idelyquantity}  onChange={(e)=>handledatalist(e)} />}
         
              </td>
           <td>200</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
            <div className="form-check">
           <input
                    className="form-check-input"
                    type="checkbox"
                    id="dosa"
                      name="dosaproduct"      value={"dosa"}
                    onClick={(e)=>handleproduct(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Dosa
                  </label>
                </div>
              </td>
              <td>
              
              {datalist.product.includes('dosa')&& <input className="form-control w-25" type="number"
                name="curdricequantity" value={datalist.dosaquantity} onChange={(e)=>handleproduct(e)}  />}
              </td>
              <td>130</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
             <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="ven pongal"
                     name="venpongalproduct"           value={"venpongal"}
                    onClick={(e)=>handleproduct(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                 Ven pongal
                  </label>
                </div>
              </td>
              <td>
              {datalist.product.includes('venpongal')&&<input className="form-control w-25" type="number" name="venpongalquantity" value={datalist.venpongalquantity} onChange={(e)=>handledatalist(e)} />}
              </td>
              <td>140</td>
            </tr>
            <tr>
              <th scope="row">4</th>

              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="upma"
                    name="upmaproduct"       value={"upma"}
                    onClick={(e)=>handleproduct(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                  Upma
                  </label>
                </div>
              </td>
              <td>
              {datalist.product.includes('upma')&& <input className="form-control w-25" type="number" name="upmaquantity" value={datalist.upmaquantity} onChange={(e)=>handledatalist(e)} />}
              </td>
              <td>190</td>
            </tr>
          </tbody>
        </table> :datalist.lunchlist==="Non-veg"?
         <table className="table mt-3 p-4">
          <thead>
            <tr>
              <th scope="col" className="bs">
                S.no
              </th>
              <th scope="col" className="bs">
                Product
              </th>
              <th scope="col" className="bs">
                Quantity
              </th>
              <th scope="col" className="bs">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
               <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="chickenpasta"
                   name="chickenpastaquantity" value={"chickenpasta"}
                    onClick={(e)=>handlequantity(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                  Chickenpasta
                  </label>
                </div>
              </td>
              <td>
              {datalist.quantity.includes('chickenpasta')&&<input className="form-control w-25" type="number" name="chickenpastaquantity" value={datalist.chickenpastaquantity}  onChange={(e)=>handledatalist(e)} />}
              </td>
              <td>120</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="chilli chicken"
                      name="chillichickenquantity"      value={"chillichicken"}
                    onClick={(e)=>handlequantity(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                 Chilli chicken
                  </label>
                </div>
              </td>
              <td>
              {datalist.quantity.includes('chillichicken')&&<input className="form-control w-25" type="number"
                name="chillichickenquantity" value={datalist.chillichickenquantity} onChange={(e)=>handledatalist(e)}  />}
             </td>
              <td>130</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="egg pulao"
                     name="eggpulaoquantity"           value={"eggpulao"}
                    onClick={(e)=>handlequantity(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                  Egg pulao
                  </label>
                </div>
              </td>
              <td>
              {datalist.quantity.includes('eggpulao')&& <input className="form-control w-25" type="number" name="eggpulaoquantity" value={datalist.eggpolaoquantity} onChange={(e)=>handledatalist(e)} />}
              </td>
              <td>140</td>
            </tr>
            <tr>
              <th scope="row">4</th>

              <td>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="ginger chicken"
                    name="gingerchickenquantity"       value={"gingerchicken"}
                    onClick={(e)=>handlequantity(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
              Ginger chicken
                  </label>
                </div>
              </td>
              <td>
              {datalist.quantity.includes('gingerchicken')&& <input className="form-control w-25" type="number" name="gingerchickenquantity" value={datalist.gingerchickenquantity} onChange={(e)=>handledatalist(e)} />}
              </td>
              <td>190</td>
            </tr>
          </tbody>
        </table>:null}
     

<h5 className="mt-2 bs">Address Details</h5>
      
        
      <label>Street :</label>
      <textarea className=" form-control p-0 " name="street" value={datalist.street}  onChange={(e)=>handledatalist(e)} />
  
    <div className="row">
    <div className="col-3 mt-3">
      <label>City :</label>
      <input className=" form-control " name="city" value={datalist.city} onChange={(e)=>handledatalist(e)} />
      <div />
    </div>
    <div className="col-3 mt-3">
      <label>State :</label>
      <input className="form-control " name="state" value={datalist.state}  onChange={(e)=>handledatalist(e)} />
    </div>
  
    <div className="col-3 mt-3">
      <label >Zip :</label>
      <input className=" form-control " name="zip" value={datalist.zip}  onChange={(e)=>handledatalist(e)} />
    </div>
    </div> 
  <div className="d-grid gap-2 d-md-flex justify-content-end">
  <button className="btn p-2 me-md-2  bg-white" onClick={()=>navigate("/breakfast")} type="button">Cancel</button>
  <button className="btn p-2 me-md-2 pink text-white"  onClick={() => handleValue()}  type="button">Submit</button>

</div>


  </div>
        </Formik>

  
     </div >
    
   
    </div>

   
  );
 
}
export default Datalist;
