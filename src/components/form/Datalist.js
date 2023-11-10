import Sidebar from "../breakfast/Sidebar";
import Lunchlist from "./Lunchlist";

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

  return (

    // <div className="row ">
    //       <div className="col-2  ">
    //         <Sidebar />
    //       </div>
          
    <div className="col-10 mx-auto">
       <div className="card p-4 ms-3 mt-3 "> 
     <div className="row">
     <h6>Personal Details</h6>
      <div className="col-6">
      
        <label>Name</label>
        <input className="box"/>
   
      </div>
      <div className="col-6">
        <label>Phone Number</label>
        <input type="number" className="box"/>
        <div/>
  
    </div>
   </div>
   <div className="row">
    <div className="col-6">
    <label className="mt-3">Gender</label>
   <div className="form-check ">
  <input className="form-check-input" type="radio"  name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label male" for="flexRadioDefault1" >
    Male
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" for="flexRadioDefault2">
 Female
  </label>
</div>
<div className="form-check ">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" for="flexRadioDefault2">
 Others
  </label>
</div>
    </div>
    <div className="col-6">
      <label className="mt-3">Date of Birth</label>
  <input type="date" className="form-control"/>
</div>

   <label className=" mt-3 h6 ">Type of food like to have?</label>
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
  <div className="form-check">
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
  <Lunchlist
    LunchMenu={props.LunchMenu}
    setLunchMenu={props.setLunchMenu}
    Price={props.Price}
  />
  <h6 className="mt-2">Address Details</h6>
  <label>street :</label>
  <input className="female "/>
<div className="row">
  <div className="col-6">
    <label>city :</label>
    <input className="mt-3 female ms-1"/>
  </div>
  <div className="col-6">
    <label>state :</label>
    <input className="mt-3 female ms-1" />
  </div>
</div>
<div className="row">
  <div className="col-6">
    <label>zip :</label>
    <input className="mt-3 female ms-1"/>
  </div>
  <div className="col-6">
    <label>country :</label>
    <input className="mt-3 female ms-1"/>
  </div>
</div>
  
  </div>
  <div/>
  <div/>
  
</div>
  </div>

 );
};
export default Datalist;
