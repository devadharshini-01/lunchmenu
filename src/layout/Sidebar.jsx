import logo from "../assets/image/sidebarimage.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  return (
    <div className="row sidebar  h-100">
      <div className=" p-3 mb-5 rounded">
        <img
          src={logo}
          className=" d-flex justify-content-center logo  "
        />
        <div className="list-group mt-3 ">

          <Link to="/breakfast">
            {" "}
            <p
              className={`${
                props.active === "breakfast"
                  ? "p-2 bg-white rounded-3  text-danger"
                  : "text-white"
              } p-2 fontsize hover  `}
              onClick={() => props.setActive("breakfast")}
            >
              <Icon
                className="me-2"
                icon="material-symbols-light:no-meals-rounded"
                width="20"
                height="20"
              />
              Breakfast
            </p>
          </Link>
          <Link to="/lunch" >
            {" "}
            <p
              className={`${
                props.active === "lunch"
                  ? " p-2 bg-white rounded-3  text-danger"
                  : "text-white"
              } p-2 hover   fontsize `}
              onClick={() => props.setActive("lunch")}
            >
              <Icon
                className="mb-1 me-2"
                icon="cil:dinner"
                width="20"
                height="20"
              />
              Lunch
            </p>
          </Link>

          <Link to="/dinner" >
            {" "}
            <p
              className={`${
                props.active === "dinner"
                  ? " p-2 bg-white rounded-3 text-danger"
                  : "text-white"
              } p-2 hover  fontsize `}
              onClick={() => props.setActive("dinner")}
            >
              <Icon
                className="mb-1 me-2"
                icon="mdi:dinner"
                width="20"
                height="20"
              />
              Dinner
            </p>
          </Link>
       
          <Link to="/User-data-table">
            <p
              className={`${
                props.active === "User-data-table"
                  ? " p-2 bg-white rounded-3  text-danger"
                  : "text-white"
              } p-2 hover   `}
              onClick={() => props.setActive("User-data-table")}
            >
              <Icon
                icon="uil:chat-bubble-user"
                width="20"
                height="20"
                className="me-2 mb-1"
              />
              User DataTable
            </p>
          </Link>
       
          <Link to="/fts-data-table">
            {" "}
            <p
              className={`${
                props.active === "Ftsdatatable"
                  ? " p-2 bg-white rounded-3 text-danger"
                  : "text-white"
              } p-2 hover  `}
              onClick={() => props.setActive("Ftsdatatable")}
            >
              <Icon
                icon="gridicons:multiple-users"
                className="mb-1 me-2"
                width="20"
                height="20"
              />
              Ftsdatatable
            </p>
          </Link>
        </div>
        
      </div>
 
      <Link to="/">
            {" "}
            <p
              className={`$ p-2 text-white mt-5`}
              onClick={() => props.setActive("/")}
            >
                  <Icon className="mb-1 me-2" icon="ic:baseline-logout" width="20" height="20"
               
                />
              Log Out
            </p>
          </Link>
   
    </div>
  );
};
export default Sidebar;
