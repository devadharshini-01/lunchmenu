const Datalist =(props)=>{
    
    return(
        <div className="col-7">
        <div className="card p-3 ms-3 mt-3 ">
          <h5 className="text-center font  ">Order List</h5>
         <label className="form-label font h6 ">Name</label>
          <input
            type="name"
            className="form-control rounded-3 me-3 color"
            value={props.name}
            onChange={(e) =>props. handleName(e)}
          />
          <label className="font mt-2 h6  ">Price</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="price"
              id="veg"
              value={"veg"}
              onChange={(e) => props.handlePrice(e)}
            />
            <label
              className="form-check-label p-1 "
              for="price"
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
              onChange={(e) =>props. handlePrice(e)}
            />
            <label
              className="form-check-label  "
              for="price"
            >
              Non veg ₹90
            </label>
          </div>
          {props.price === "veg"?< div className="d-flex flex-row">
              <div className="form-check me-3">
                <input
                  className="form-check-input "
                  type="checkbox"
                  value={"meals"}
                  onClick={(e) =>props. handleLunchMenu(e)}
                />
                <label>Meals</label>
              </div>
              <div className="form-check me-3">
                <input
                  className="form-check-input "
                  type="checkbox"
                  value={"curd-rice"}
                  onClick={(e) =>props.handleLunchMenu(e)}
                />
                <label>Curd rice</label>
              </div>
              <div className="form-check me-3">
                <input
                  className="form-check-input "
                  type="checkbox"
                  value={"veg-rice"}
                  onClick={(e) =>props. handleLunchMenu(e)}
                />
                <label>Veg rice</label>
              </div>
              <div className="form-check me-3">
                <input
                  className="form-check-input "
                  type="checkbox"
                  value={"veg-Noodles"}
                  onClick={(e) =>props. handleLunchMenu(e)}
                />
                <label>Veg noodles</label>
              </div>
            </div>:props.price ==="Non-veg"?
           < div className="d-flex flex-row ">
              <div className="form-check me-2 ">
                <input
                  className="form-check-input "
                  type="checkbox"
                  value={"chiken-rice"}
                  onClick={(e) =>props. handleLunchMenu(e)}
                />
                <label>Chicken rice</label>
              </div>
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={"Briyani"}
                  onClick={(e) =>props. handleLunchMenu(e)}
                />
                <label>Biryani</label>
              </div>
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={"chiken-Noodles"}
                  onClick={(e) =>props. handleLunchMenu(e)}
                />
                <label>Chicken noodles</label>
              </div>
              <div className="form-check me-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={"chiken-65"}
                  onClick={(e) =>props. handleLunchMenu(e)}
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
              onClick={(e) =>props. handleIssue(e)}
            />
            <label
              className="form-check-label "
              for="flexRadioDefault1"
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
              onClick={(e) =>props. handleIssue(e)}
            />
            <label
              className="form-check-label "
              for="flexRadioDefault2"
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
            onChange={(e) => props.handleFeedback(e)}
          ></textarea>
          <div>
            { <button
              className="font bg-light rounded-3 btn w-100 bg-light mt-2 "
              onClick={() =>props. setVisible(false)}
            >
              Submit
            </button> }
          </div>
        </div>
      </div>
    )
}
export default Datalist