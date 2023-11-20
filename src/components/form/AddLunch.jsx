import Sidebar from "../../layout/Sidebar";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Menulist =()=>{
    

    const [menulist, setMenulist] = useState({
      
      name:"",
     phoneNumber:"",
     dateofbirth:"",
     gender:"",
     price:"",
    
    tomotoriceproduct:"",
    curdriceproduct:"",
    sambarriceproduct:"",
    coconutrice:"",
    
    tomotoquantity:"",
    curdricequantity:"",
    sambarricequantity:"",
    coconutricequantity:"",
    
     street:"",
     city:"",
     state:"",
     zip:"",
    
    });
    const [active, setActive] = useState();
  
    const navigate = useNavigate();
    const handlemenulist = (e) => {
        setMenulist({ ...menulist, [e.target.name]: e.target.value });
      };
    return(
     <>
      <div className="row ">
      
      <div className="col-2 ">
        <Sidebar active={active} setActive={setActive} />
      </div>

      <div className="col-10  p-3 edit ">
        
<div className="mx-5">
        <div className="row ">
          <h5 className="bs">Personal Details</h5>
          <div className="col-3">
            <label>Name :</label>
            <input className=" form-control box" name="name" value={menulist.name}
            onChange={(e)=>handlemenulist(e)} />
           
          </div>
          <div className="col-3">
            <label>Phone Number :</label>
            <input type="number" className=" form-control box" name="phonenumber" value={menulist.phoneNumber} onChange={(e)=>handlemenulist(e)} />
          </div>
          <div className="col-3">
            <label>Date of Birth :</label>
            <input type="date" className="form-control" name="dateofbirth" value={menulist.dateofbirth} onChange={(e)=>handlemenulist(e)}/>
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
                    name="gender" value="male"onClick={(e)=>handlemenulist(e)}
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
                    onClick={(e)=>handlemenulist(e)}
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
                    onClick={(e)=>handlemenulist(e)}
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
                name="price"
                id="veg"
                value="veg"
                 onClick={(e) => handlemenulist(e)}
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
                name="price"
                id="Nonveg"
                value="Non-veg"
                 onClick={(e) => handlemenulist(e)}
              />
              <label className="form-check-label  " for="price">
                Non veg 
              </label>
            </div>
          </div>
        </div>
       
      {menulist.price==="veg"? <table className="table mt-3 p-4">
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
                    id="tomoto rice"
                   name="tomotoriceproduct" value={"tomotorice.tomotoriceproduct"}
                    onClick={(e)=>handlemenulist(e)}
                  />
                <label className="form-check-label" for="flexCheckDefault">
                    Meals
                  </label>
                </div>

  
              </td> 
              
              <td>
                <input className="form-control w-25" type="number" name="tomotoricequantity" value={menulist.tomotoquantity}  onChange={(e)=>handlemenulist(e)} />
                      
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
                    id="curd rice"
                      name="curdriceproduct"      value={"menulist.curdriceproduct"}
                    onClick={(e)=>handlemenulist(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Curd rice
                  </label>
                </div>
              </td>
              <td>
              
                <input className="form-control w-25" type="number"
                name="curdricequantity" value={menulist.curdricequantity} onChange={(e)=>handlemenulist(e)}  />
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
                    id="veg rice"
                     name="vegriceproduct"           value={"menulist.vegriceproduct"}
                    onClick={(e)=>handlemenulist(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Veg rice
                  </label>
                </div>
              </td>
              <td>
              <input className="form-control w-25" type="number" name="vegricequantity" value={menulist.vegricequantity} onChange={(e)=>handlemenulist(e)} />
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
                    id="veg noodles"
                    name="vegnoodlesproduct"       value={"menulist.vegnoodlesproduct"}
                    onClick={(e)=>handlemenulist(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Veg noodles
                  </label>
                </div>
              </td>
              <td>
                <input className="form-control w-25" type="number" name="vegnoodlesquantity" value={menulist.vegnoodlesquantity} onChange={(e)=>handlemenulist(e)} />
              </td>
              <td>190</td>
            </tr>
          </tbody>
        </table> :menulist.price==="Non-veg"?
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
                    id="meals"
                   name="meals product" value={"menulist.mealsproduct"}
                    onClick={(e)=>handlemenulist(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Briyani
                  </label>
                </div>
              </td>
              <td>
                <input className="form-control w-25" type="number" name="mealsquantity" value={menulist.mealsquantity}  onChange={(e)=>handlemenulist(e)} />
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
                    id="curd rice"
                      name="curdriceproduct"      value={"menulist.curdriceproduct"}
                    onClick={(e)=>handlemenulist(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Chicken rice
                  </label>
                </div>
              </td>
              <td>
                <input className="form-control w-25" type="number"
                name="curdricequantity" value={menulist.curdricequantity} onChange={(e)=>handlemenulist(e)}  />
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
                    id="veg rice"
                     name="vegriceproduct"           value={"menulist.vegriceproduc"}
                    onClick={(e)=>handlemenulist(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Chicken noodles
                  </label>
                </div>
              </td>
              <td>
              <input className="form-control w-25" type="number" name="vegricequantity" value={menulist.vegricequantity} onChange={(e)=>handlemenulist(e)} />
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
                    id="veg noodles"
                    name="vegnoodlesproduct"       value={"menulist.vegnoodlesproduct"}
                    onClick={(e)=>handlemenulist(e)}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                   Chicken 65
                  </label>
                </div>
              </td>
              <td>
                <input className="form-control w-25" type="number" name="vegnoodlesquantity" value={menulist.vegnoodlesquantity} onChange={(e)=>handlemenulist(e)} />
              </td>
              <td>190</td>
            </tr>
          </tbody>
        </table>:null}
     

<h5 className="mt-2 bs">Address Details</h5>
      
        
      <label>Street :</label>
      <textarea className=" form-control p-0 " name="street" value={menulist.street}  onChange={(e)=>handlemenulist(e)} />
  
    <div className="row">
    <div className="col-3 mt-3">
      <label>City :</label>
      <input className=" form-control " name="city" value={menulist.city} onChange={(e)=>handlemenulist(e)} />
      <div />
    </div>
    <div className="col-3 mt-3">
      <label>State :</label>
      <input className="form-control " name="state" value={menulist.state}  onChange={(e)=>handlemenulist(e)} />
    </div>
  
    <div className="col-3 mt-3">
      <label >Zip :</label>
      <input className=" form-control " name="zip" value={menulist.zip}  onChange={(e)=>handlemenulist(e)} />
    </div>
    </div> 
  <div className="d-grid gap-2 d-md-flex justify-content-end">
  <button className="btn p-2 me-md-2  bg-white" onClick={()=>navigate("/lunch")} type="button">Cancel</button>
  <button className="btn p-2 me-md-2 pink text-white"  onClick={() => navigate("/lunch")}  type="button">Submit</button>

</div>
  </div>
  <div />
    <div />
    </div>
    </div>
     </>   
    )
}
export default Menulist;