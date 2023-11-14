import Sidebar from "../breakfast/Sidebar";
import Lunchlist from "./Lunchlist";
import { useState } from "react";

const Datalist = (props) => {
  const handleName = (event) => {
    props.setName(event.target.value);
  };
  const handlePrice = (event) => {
    props.setPrice(event.target.value);
  };

  const handleIssue = (event) => {
    props.setIssue(event.target.value);
  };
  const handleFeedback = (event) => {
    props.setFeedback(event.target.value);
  };
  const [active,setActive]=useState();

  return (
    
    <div className="row ">
      <div className="col-2  ">

        <Sidebar active={active} setActive={setActive}/>
      </div>
     

       <div className="col-10  p-3 edit">
       <nav className="divider" aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><p><span className="text-secondary">Breakfast</span></p></li>
    <li className="breadcrumb-item active text-black" aria-current="page">Personal details</li>
  </ol>
</nav>

    
          <div className="row">
            <h5 className="bs">Personal Details</h5>
            <div className="col-3">
              <label>Name</label>
              <input className=" form-control box" />
            </div>
            <div className="col-3">
              <label>Phone Number</label>
              <input type="number" className=" form-control box" />
              
            </div>
            <div className="col-3">
            <label>Date of Birth</label>
              <input type="date" className="form-control" />
          </div>

       
          <div className="row">
           
              <label className="mt-2 bs">Gender</label>
              <div  className="row w-25">
                <div className="col-4">
                <div className="form-check me-3">
                <input
                  className="form-check-input "
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label male"
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
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
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
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  Others
                </label>
              </div>
            </div>
              </div>
              </div>
            
              </div>
             
             
         
           
           

            <label className=" mt-3 h6 bs ">Type of food like to have?</label>
            <div className="row w-25">
              <div className="col-6">
              <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="price"
                id="veg"
                value={"veg"}
                onChange={(e) => handlePrice(e)}
              />
              <label className="form-check-label  " for="price">
                Veg ₹70
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
                value={"Non-veg"}
                onChange={(e) => handlePrice(e)}
              />
              <label className="form-check-label  " for="price">
                Non veg ₹90
              </label>
            </div>
              </div>
              </div>
         
            <table className="table mt-3 p-4">
              <thead>
                <tr>
                  <th scope="col" className="bs">S.no</th>
                  <th scope="col" className="bs">Product</th>
                  <th scope="col"className="bs">Quantity</th>
                  <th scope="col" className="bs">Price</th>
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
                       
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        Meals
                      </label>
                    </div>
                  </td>
                  <td>
                    < input className="form-control w-25" />
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
                        
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        Curd rice
                      </label>
                    </div>
                  </td>
                  <td>
                    <input className="form-control w-25" />
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
                  
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        Veg rice
                      </label>
                    </div>
                  </td>
                  <td>
                    <input className="form-control w-25" />
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
                     
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        Veg noodles
                      </label>
                    </div>
                  </td>
                  <td>
                    <input className="form-control w-25"/>
                  </td>
                  <td>190</td>
                </tr>
              </tbody>
            </table>

            <h5
              className="mt-2 bs">
  
              Address Details
            </h5>
            <div className="row">
       
            <div className="col-3">
              <label>Street :</label>
              <input className=" form-control  " />
            </div>
            <div className="col-3">
              <label>City :</label>
              <input  className=" form-control  " />
              <div />
            </div>
            <div className="col-3">
            <label>State :</label>
              <input className="form-control " />
          </div>
           
        </div>
            <div className="row">
              <div className="col-3">
                <label className="mt-2">Zip :</label>
                <input className=" form-control female " />
              </div>
              <div className="col-3">
                <label className="mt-2">Country :</label>
                <input className=" form-control female " />
              </div>
            </div>
        
          <div />
          <div />
        </div>
      </div>
   
  
  );
};
export default Datalist;
