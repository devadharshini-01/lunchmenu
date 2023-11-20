import logo from "../assets/image/logo.png";
import { Icon } from "@iconify/react";
const Sidebar = (props) => {
  console.log(props.active)
  return (
    <div className="row message ">
      <div className=" p-3 mb-5   rounded">
      
     <img src={logo} className=" d-flex justify-content-center logo mx-auto" ></img>
 
        <div className="list-group  ">
          <a href="#" className={`${props.active==="breakfast"?"bg-white rounded-3  text-danger":"text-white"} p-2 url a:hover mt-2 `}  onClick={()=>props.setActive("breakfast")}><Icon className="me-2" icon="material-symbols-light:no-meals-rounded" width="20" height="20" />
        
            Breakfast
          </a>
          <a href="#" className= {`${props.active==="lunch"?"bg-white rounded-3 text-danger":"text-white"} p-2 url a:hover  url `}  onClick={()=>props.setActive("lunch")}><Icon className="mb-1 me-2" icon="cil:dinner" width="20" height="20" />
            Lunch
          </a>
          <a href="#" className={`${props.active==="dinner"?"bg-white rounded-3 text-danger":"text-white"} p-2 url a:hover  url `} onClick={()=>props.setActive("dinner")}><Icon className="mb-1 me-2" icon="mdi:dinner" width="20" height="20" />
           
            Dinner
          </a>
        </div>
        </div>
    </div>
  );
};
export default Sidebar;
