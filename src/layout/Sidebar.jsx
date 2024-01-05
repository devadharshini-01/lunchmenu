import logo from "../assets/image/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Sidebar = (props) => {
  return (
    <div className="row message ">
      <div className=" p-3 mb-5   rounded">
        <img
          src={logo}
          className=" d-flex justify-content-center logo mx-auto"
        ></img>

        <div className="list-group  ">
          <Link to="/breakfast" >
            {" "}
            <p
              className={`${
                props.active === "breakfast"
                  ? "p-2 bg-white rounded-3  text-danger"
                  : "text-white"
              } p-2 url class mt-2 `}
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
          <Link to="/lunch" className="best">
            {" "}
            <p
              className={`${
                props.active === "lunch"
                  ? " p-2 bg-white rounded-3  text-danger"
                  : "text-white"
              } p-2 class mt-2  url `}
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

          <Link to="/dinner" className="best">
            {" "}
            <p
              className={`${
                props.active === "dinner"
                  ? " p-2 bg-white rounded-3 text-danger"
                  : "text-white"
              } p-2 class mt-2 url `}
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
        <Link to="/Userdata">
          
          <p
              className={`${
                props.active === "Userdata"
                  ? " p-2 bg-white rounded-3  text-danger "
                  : "text-white"
              } p-2  class mt-2 a:link `}
              onClick={() => props.setActive("Userdata")}
            >
          
          <Icon icon="codicon:account" width="20" height="20" className="mb-1 me-2" />
                userdata
            </p>
            </Link>
            <Link to="/User-data-table">
            <p
              className={`${
                props.active === "User-data-table"
                  ? " p-2 bg-white rounded-3  text-danger"
                  : "text-white"
              } p-2 class mt-2 a:link  `}
              onClick={() => props.setActive("User-data-table")}
            >
                 <Icon icon="uil:chat-bubble-user" width="20" height="20" className="me-2 mb-1"/>
                User DataTable
            </p>
            </Link>
              <Link to="/fts-user-data" >
            {" "}
            <p
              className={`${
                props.active === "Ftsuserdata"
                  ? " p-2 bg-white rounded-3 text-danger"
                  : "text-white"
              } p-2 class mt-2 a:link `}
              onClick={() => props.setActive("Ftsuserdata")}
            >
     
        <Icon icon="uil:user" width="20" height="20" className="mb-1 me-2"/>
            
           Ftsuserdata
            
            </p>
          </Link>
          <Link to="/fts-data-table" >
            {" "}
            <p
              className={`${
                props.active === "Ftsdatatable"
                  ? " p-2 bg-white rounded-3 text-danger"
                  : "text-white"
              } p-2 class mt-2 a:link `}
              onClick={() => props.setActive("Ftsdatatable")}
            >
              <Icon icon="gridicons:multiple-users" className="mb-1 me-2" width="20" height="20" />
          
           Ftsdatatable
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
