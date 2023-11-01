const Lunchlist = (props) => {
  const handleLunchMenu = (event) => {
    if (event.target.checked)
      props.setLunchMenu([...props.LunchMenu, event.target.value]);
    else {
      const temp = props.LunchMenu.filter(
        (item) => item !== event.target.value
      );
      props.setLunchMenu(temp);
    }
  };
  return (
    <>
      {props.Price === "veg" ? (
        <>
          <label className="p-1 h6">LunchMenu</label>

          <div className="d-flex flex-row">
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
                onClick={(e) => handleLunchMenu(e)}
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
          </div>
        </>
      ) : props.Price === "Non-veg" ? (
        <>
          <label className="p-1 h6">LunchMenu</label>
          <div className="d-flex flex-row ">
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
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default Lunchlist;
