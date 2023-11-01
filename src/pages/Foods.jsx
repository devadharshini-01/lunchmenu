import React from "react";
import { useState } from "react";
import Datalist from "../components/form/Datalist";
import Menulist from "../components/card/Menulist";

const Foods = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [lunchMenu, setLunchMenu] = useState([]);
  const [issue, setIssue] = useState();
  const [feedback, setFeedback] = useState();
  const [visible, setVisible] = useState(true);
 

  return (
    <>
      <form>
        <div className="container mt-3">
          <div className="row">
            {visible ?(
              <Datalist
                name={name}
                setName={setName}
                Price={price}
                setPrice={setPrice}
                LunchMenu={lunchMenu}
                setLunchMenu={setLunchMenu}
                Issue={issue}
                setIssue={setIssue}
                feedback={feedback}
                setFeedback={setFeedback}
                setVisible={setVisible}
              />
            ):
            <Menulist
              name={name}
              price={price}
              lunchMenu={lunchMenu}
              issue={issue}
              feedback={feedback}
            />}
          </div>
        </div>
      </form>
    </>
  );
};
export default Foods;
