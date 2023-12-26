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
          <Link to="/breakfast" className="best">
            {" "}
            <p
              className={`${
                props.active === "breakfast"
                  ? "p-2 bg-white rounded-3  text-danger"
                  : "text-white"
              } p-0 url a:hover mt-2 `}
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
              } p-0 a:hover mt-2  url `}
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
              } p-0 a:hover mt-2 url `}
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
        {/* <Link to="/userdata">
          
          <p
              className={`${
                props.active === "userdata"
                  ? " p-2 bg-white rounded-3  text-danger "
                  : "text-white"
              } p-0  a:hover mt-2 a:link `}
              onClick={() => props.setActive("userdata")}
            >
            
                user data
            </p>
            </Link>
            <Link to="/userdatatable">
            <p
              className={`${
                props.active === "userdatatable"
                  ? " p-2 bg-white rounded-3  text-danger"
                  : "text-white"
              } p-0 a:hover mt-2 a:link  `}
              onClick={() => props.setActive("userdatatable")}
            >
            
                User DataTable
            </p>
            </Link> */}
              <Link to="/Adddata" >
            {" "}
            <p
              className={`${
                props.active === "Adddata"
                  ? " p-2 bg-white rounded-3 text-danger"
                  : "text-white"
              } p-0 a:hover mt-2 a:link `}
              onClick={() => props.setActive("Adddata")}
            >
           Addata
            
            </p>
          </Link>
          <Link to="" >
            {" "}
            <p
              className={`${
                props.active === ""
                  ? " p-2 bg-white rounded-3 text-danger"
                  : "text-white"
              } p-0 a:hover mt-2 a:link `}
              onClick={() => props.setActive("")}
            >
          
           
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
