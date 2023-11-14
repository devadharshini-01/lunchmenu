import logo from "../image/Frame 55481 .png";
import { Icon } from "@iconify/react";
const Sidebar = (props) => {
  console.log(props.active)
  return (
    <div className="row message ">
      <div className=" p-3 mb-5   rounded">
        <img className="logo " src={logo}></img>
    
 
        <div className="list-group  ">
          <a href="#" className={`${props.active==="breakfast"?"bg-secondary text-danger":"text-white"} p-2 url a:hover mt-2 ms-4 `}  onClick={()=>props.setActive("breakfast")}>
        
            Breakfast
          </a>
          <a href="#" className= {`${props.active==="lunch"?"bg-secondary text-danger":"text-white"} p-2 url a:hover ms-4 url `}  onClick={()=>props.setActive("lunch")}>
          
            Lunch
          </a>
          <a href="#" className={`${props.active==="dinner"?"bg-secondary text-danger":"text-white"} p-2 url a:hover  ms-4 url `} onClick={()=>props.setActive("Dinner")}>
           
            Dinner
          </a>
        </div>
        </div>
    </div>
  );
};
export default Sidebar;
