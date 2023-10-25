
import React from "react";
import { useState } from "react";
// import Datalist from "../pages/Datalist";
// import Menulist from "../pages/Menulist";
 const Foods = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [lunchMenu, setLunchMenu] = useState([]);
  const [issue, setIssue] = useState();
  const [feedback, setFeedback] = useState();
  const [visible, setVisible] = useState(true);

const handleName = (event) => {
setName(event.target.value);
  };
  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
    const handleLunchMenu = (event) => {
     if(event.target.checked)
    (setLunchMenu([...lunchMenu ,event.target.value]))    
      else{
         const temp=lunchMenu.filter((item)=>item!==event.target.value)
         setLunchMenu(temp)
      }
  };
 const handleIssue = (event) => {
    setIssue(event.target.value);
  };
  const handleFeedback = (event) => {
    setFeedback(event.target.value);
  };

  return (
    <>
      <form>
        <div className="container">
          <div className="row">
            {visible && (
            //  <Datalist name={name} handleName={handleName} Price={price} handlePrice={handlePrice} 
            //  LunchMenu={lunchMenu} handleLunchMenu={handleLunchMenu} Issue={issue} handleIssue={handleIssue}
            //  feedback={feedback} handleFeedback={handleFeedback} setVisible={setVisible}/>
            <div className="col-7">
            <div className="card p-3 ms-3 mt-3 ">
              <h5 className="text-center font  ">Order List</h5>
             <label className="form-label font h6 ">Name</label>
              <input
                type="name"
                className="form-control rounded-3 me-3 color"
                value={name}
                onChange={(e) =>handleName(e)}
              />
              <label className="font mt-2 h6  ">Price</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="price"
                  id="veg"
                  value={"veg"}
                  onChange={(e) =>handlePrice(e)}
                />
                <label
                  className="form-check-label p-1 "
                  htmlFor="price"
                >
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
                <label
                  className="form-check-label  "
                  htmlFor="price"
                >
                  Non veg ₹90
                </label>
              </div>
              {price === "veg"?< div className="d-flex flex-row">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value={"meals"}
                      onClick={(e) => handleLunchMenu(e)}
                    />
                    <label>Meals</label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value={"curd-rice"}
                      onClick={(e) =>handleLunchMenu(e)}
                    />
                    <label>Curd rice</label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value={"veg-rice"}
                      onClick={(e) => handleLunchMenu(e)}
                    />
                    <label>Veg rice</label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value={"veg-Noodles"}
                      onClick={(e) => handleLunchMenu(e)}
                    />
                    <label>Veg noodles</label>
                  </div>
                </div>:price ==="Non-veg"?
               < div className="d-flex flex-row ">
                  <div className="form-check me-2 ">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value={"chiken-rice"}
                      onClick={(e) => handleLunchMenu(e)}
                    />
                    <label>Chicken rice</label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={"Briyani"}
                      onClick={(e) => handleLunchMenu(e)}
                    />
                    <label>Biryani</label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={"chiken-Noodles"}
                      onClick={(e) => handleLunchMenu(e)}
                    />
                    <label>Chicken noodles</label>
                  </div>
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={"chiken-65"}
                      onClick={(e) => handleLunchMenu(e)}
                    />
                    <label>Chicken 65</label>
                  </div>
                </div>:<></>}
              <label className="font mt-2 size t">
                If you have any problem?
              </label>
              <div className="form-check size">
                <input
                  className="form-check-input "
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value={"yes"}
                  onClick={(e) => handleIssue(e)}
                />
                <label
                  className="form-check-label "
                  htmlFor="flexRadioDefault1"
                >
                  Yes
                </label>
              </div>
              <div className="form-check size">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value={"No"}
                  onClick={(e) => handleIssue(e)}
                />
                <label
                  className="form-check-label "
                  htmlFor="flexRadioDefault2"
                >
                  No
                </label>
              </div>
              <label className="font mt-2 size ">
                Describe your problem
              </label>
              <textarea
                className="form-control p-3 mt-2"
                id="floatingTextarea"
                onChange={(e) => handleFeedback(e)}
              ></textarea>
              <div>
                { <button
                  className="font bg-light rounded-3 btn w-100 bg-light mt-2 "
                  onClick={() => setVisible(false)}
                >
                  Submit
                </button> }
              </div>
            </div>
          </div>
            )}
          {/* <Menulist name={name} price={price}
          lunchMenu={lunchMenu} issue={issue}
          feedback={feedback} /> */}
            <div className="col-3 g-3">
        <div className="card text p-2  ">
          <label className="h6 text-center mt-2  ">Menu List</label>
          <label className="p-1">Name : {name}</label>
          <label className="p-1">Price : {price}</label>
          <label className="p-1">Lunch menu : {lunchMenu}</label>
          <label className="p-1">If you have any problem : {issue}</label>
          <label className="p-1">
            Describe your problem : {feedback}
          </label>
        
        </div> 
      </div>
        
          </div>
        </div>
      </form>
    </>
  );
};
export default Foods;
