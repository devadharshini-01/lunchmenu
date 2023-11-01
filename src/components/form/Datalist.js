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
    <div className="col-7 mx-auto">
      <div className="card p-3 ms-3 mt-3 ">
        <h5 className="text-center font  ">Order List</h5>
        <label className="form-label font h6 ">Name</label>
        <input
          type="name"
          className="form-control rounded-3 me-3 color"
          value={props.name}
          onChange={(e) => handleName(e)}
        />
        <label className="font mt-3 h6 ">Type of food like to have?</label>
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

        <label className="font mt-2 size ">If you have any problem?</label>
        < div className="form-check size">
          <input
            className="form-check-input "
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value={"yes"}
            onClick={(e) => handleIssue(e)}
          />
          <label className="form-check-label " for="flexRadioDefault1">
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
          <label className="form-check-label " for="flexRadioDefault2">
            No
          </label>
        </div>
          
         { props.Issue==="yes"?
         <>
         <label className="font mt-2 size ">Describe your problem</label>
          <textarea
            className="form-control p-3 mt-2"
            id="floatingTextarea"
            onChange={(e) => handleFeedback(e)}
          ></textarea></>
          :<></>
           }
             <button
                className="font  rounded-3 btn w-100 btn-info mt-2 "
                onClick={() => props.setVisible(false)}
              >
                Submit
              </button>
            </div>
    </div>
  );
};
export default Datalist;