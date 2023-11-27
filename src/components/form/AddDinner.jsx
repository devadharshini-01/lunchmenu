import Sidebar from "../../layout/Sidebar";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Dinnerlist=(props)=>{
    const [dinnerlist, setDinnerlist] = useState({
  
        name:"",
       phoneNumber:"",
       dateofbirth:"",
       gender:"",
       menu:"",
       cost:"",
       
       product:[],
       quantity:[],
       price:"",
       value:"",
      
      //  parotaproduct:"",
      //   chappathiproduct:"",
      //  pooriproduct:"",
      // paniyaramproduct:"",
      
      //  parotaquantity:"",
      //  chapatiquantity:"",
      //  pooriquantity:"",
      //  paniyaramquantity:"",
      
      //  chickentikkaproduct:"",
      //  chickenriceproduct:"",
      //  chickennoodlesproduct:"",
      //  grilledchickensandwichproduct:"",
      
      // chickentikkaquantity:"",
      // chickenricequantity:"",
      // chickennoodlesquantity:"",
      // grilledchickensandwichquantity:"",
   
      
      
       street:"",
       city:"",
       state:"",
       zip:"",
      
      });
      
  // const [active, setActive] = useState();

  
  const navigate = useNavigate();
  const handledinnerlist = (e) => {
    setDinnerlist({ ...dinnerlist, [e.target.name]: e.target.value });
  };
  const handleproduct = (event) => {
    if (event.target.checked)
      setDinnerlist({...dinnerlist, product:[...dinnerlist.product,event.target.value]});
    else {
      const temp = dinnerlist.product.filter(
        (item) => item !== event.target.value
      );
      setDinnerlist({...dinnerlist,product:temp});
    }
  };
  const handlequantity = (event) => {
    if (event.target.checked)
      setDinnerlist({...dinnerlist, quantity:[...dinnerlist.quantity,event.target.value]});
    else {
      const temp = dinnerlist.quantity.filter(
        (item) => item !== event.target.value
      );
      setDinnerlist({...dinnerlist,quantity:temp});
    }
  };
  useEffect(()=>{
    const temp = dinnerlist.cost*15;
    setDinnerlist({...dinnerlist,price:temp});
      },[dinnerlist.cost])

console.log(dinnerlist,"dinnerlist",dinnerlist.price!=="");
    return(
     <>
     
      <div className="row ">
      
      <div className="col-2 ">
        <Sidebar active={props.active} setActive={props.setActive} />
      </div>

      <div className="col-10  p-3  ">
        
<div className="mx-5">
        <div className="row ">
          <h5 className="bs">Personal Details</h5>
          <div className="col-3">
            <label>Name :</label>
            <input className=" form-control box" name="name" value={dinnerlist.name}
            onChange={(e)=>handledinnerlist(e)} />
           
          </div>
          <div className="col-3">
            <label>Phone Number :</label>
            <input type="number" className=" form-control box" name="phonenumber" value={dinnerlist.phoneNumber} onChange={(e)=>handledinnerlist(e)} />
          </div>
          <div className="col-3">
            <label>Date of Birth :</label>
            <input type="date" className="form-control" name="dateofbirth" value={dinnerlist.dateofbirth} onChange={(e)=>handledinnerlist(e)}/>
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
                    name="gender" value="male"onClick={(e)=>handledinnerlist(e)}
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
                    onClick={(e)=>handledinnerlist(e)}
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
                    onClick={(e)=>handledinnerlist(e)}
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
                name="menu"
                id="veg"
                value="veg"
                 onClick={(e) => handledinnerlist(e)}
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
                name="menu"
                id="Nonveg"
                value="Non-veg"
                 onClick={(e) => handledinnerlist(e)}
              />
              <label className="form-check-label  " for="price">
                Non veg 
              </label>
            </div>
          </div>
        </div>
       
      {dinnerlist.menu==="veg"? <table className="table mt-3 p-4">
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
                    id="parota"
                   name="parotaproduct" value={"parota"}
                    onClick={(e)=>handleproduct(e)}
                  />
                <label className="form-check-label" for="flexCheckDefault">
                    Parota
                  </label>
                </div>

  
              </td> 
              
              <td>
           {dinnerlist.product.includes('parota')&& <input className="form-control w-25" type="number" name="parotaquantity" value={dinnerlist.cost}  onChange={(e)=>setDinnerlist({...dinnerlist,cost:e.target.value})} />}

              </td>

        {dinnerlist.price!==""&&<td>{dinnerlist.price}</td>}
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
            <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="chapati"
                      name="chapatiproduct"      value={dinnerlist.cost}
                    onClick={(e)=>handleproduct(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                   Chapati
                  </label>
                </div>
              </td>
              <td>
              
              {dinnerlist.product.includes('chapati')&&  <input className="form-control w-25" type="number"
                name="chapatiquantity" value={dinnerlist.cost} onChange={(e)=>setDinnerlist({...dinnerlist,cost:e.target.value})} />}
              </td>
            
        {dinnerlist.value!==""&&<td>{dinnerlist.value}</td>}
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
             <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="poori"
                     name="pooriproduct"           value={"poori"}
                    onClick={(e)=>handleproduct(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Poori
                  </label>
                </div>
              </td>
              <td>
              {dinnerlist.product.includes('poori')&& <input className="form-control w-25" type="number" name="pooriquantity" value={dinnerlist.pooriquantity} onChange={(e)=>handledinnerlist(e)} />}
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
                    id="paniyaram"
                    name="paniyaramproduct"       value={"paniyaram"}
                    onClick={(e)=>handleproduct(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                  Paniyaram
                  </label>
                </div>
              </td>
              <td>
              {dinnerlist.product.includes('paniyaram')&& <input className="form-control w-25" type="number" name="paniyaramquantity" value={dinnerlist.paniyaramquantity} onChange={(e)=>handledinnerlist(e)} />}
              </td>
              <td>190</td>
            </tr>
          </tbody>
        </table> :dinnerlist.menu==="Non-veg"?
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
                    id="chicken tikka"
                   name="chickentikkaquantity" value={"chickentikka"}
                    onClick={(e)=>handlequantity(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Chicken tikka
                  </label>
                </div>
              </td>
              <td>
              {dinnerlist.quantity.includes('chickentikka')&&<input className="form-control w-25" type="number" name="chickentikkaquantity" value={dinnerlist.chickentikkaquantity}  onChange={(e)=>handledinnerlist(e)} />}
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
                    id="chicken rice"
                      name="chickenricequantity"      value={"chickenrice"}
                    onClick={(e)=>handlequantity(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Chicken rice
                  </label>
                </div>
              </td>
              <td>
              {dinnerlist.quantity.includes('chickenrice')&& <input className="form-control w-25" type="number"
                name="chickenricequantity" value={dinnerlist.chickenricequantity} onChange={(e)=>handledinnerlist(e)}  />}
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
                    id="chicken noodles"
                     name="chickennoodlesquantity"           value={"chickennoodles"}
                    onClick={(e)=>handlequantity(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Chicken noodles
                  </label>
                </div>
              </td>
              <td>
              {dinnerlist.quantity.includes('chickennoodles')&& <input className="form-control w-25" type="number" name="vegricequantity" value={dinnerlist.vegricequantity} onChange={(e)=>handledinnerlist(e)} />}
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
                    id="grilled chicken sandwich"
                    name="grilledchickensandwichquantity"       value={"grilledchickensandwich"}
                    onClick={(e)=>handlequantity(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                   Grilledchickensandwich
                  </label>
                </div>
              </td>
              <td>
                {dinnerlist.quantity.includes('grilledchickensandwich')&&<input className="form-control w-25" type="number" name="grilledchickensandwichquantity" value={dinnerlist.grilledchickensandwichquantity} onChange={(e)=>handledinnerlist(e)} />}
              </td>
              <td>190</td>
            </tr>
          </tbody>
        </table>:null}
     

<h5 className="mt-2 bs">Address Details</h5>
      
        
      <label>Street :</label>
      <textarea className=" form-control p-0 " name="street" value={dinnerlist.street}  onChange={(e)=>handledinnerlist(e)} />
  
    <div className="row">
    <div className="col-3 mt-3">
      <label>City :</label>
      <input className=" form-control " name="city" value={dinnerlist.city} onChange={(e)=>handledinnerlist(e)} />
      <div />
    </div>
    <div className="col-3 mt-3">
      <label>State :</label>
      <input className="form-control " name="state" value={dinnerlist.state}  onChange={(e)=>handledinnerlist(e)} />
    </div>
  
    <div className="col-3 mt-3">
      <label >Zip :</label>
      <input className=" form-control " name="zip" value={dinnerlist.zip}  onChange={(e)=>handledinnerlist(e)} />
    </div>
    </div> 
  <div className="d-grid gap-2 d-md-flex justify-content-end">
  <button className="btn p-2 me-md-2  bg-white" onClick={()=>navigate("/dinner")} type="button">Cancel</button>
  <button className="btn p-2 me-md-2 pink text-white"  onClick={() => navigate("/dinner")}  type="button">Submit</button>

</div>
  </div>
  <div />
    <div />
    </div>
    </div>
     </>   
    )
}
export default Dinnerlist;