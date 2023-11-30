import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Breakfast from "./pages/Breakfast";
import Dinner from "./pages/Dinner";
import Lunch from "./pages/Lunch";
import AddBreakfast from "./components/form/Addbreakfast";
import AddLunch from "./components/form/AddLunch";
import AddDinner from "./components/form/AddDinner";
import { useEffect, useState } from "react";

const App = () => {
  const [active, setActive] = useState();
  const [datalist, setDatalist] = useState({
    
    name:"",
   phoneNumber:"",
   dateofbirth:"",
   gender:"",
   email:"",
   lunchlist:"",
   cost:"",
   text:"",
  input:"",
  object:"",
  state:"",
  pin:"",
  boolean:"",
  array:"",

  product:[],
  quantity:[],
  price:"",
  test:"",
  array:"",
  map:"",
  zip:"",
 code:"",
 example:"",
 list:"",

  street:"",
   city:"",
   state:"",
   zip:"",
  });
  const [menulist, setMenulist] = useState({
    name: "",
    phoneNumber: "",
    dateofbirth: "",
    gender: "",
    price: "",
    menu: "",
    list: "",
    lunch: "",
    link: "",
    put: "",
    array:"",
    object:"",
    long:"",

    product: [],
    quantity: [],
    money: "",
    quality: "",
    food: "",
    image: "",
    get: "",
    input:"",
    map:"",
    double:"",

    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [inputArr,setInputArr]= useState([]);
  // setInputArr([...inputArr,datalist])
  const[tableArr,setTableArr]=useState([]);
  // // const navigate = useNavigate();

  return (
    <>
      {/* <Foods />   */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        
          <Route path="breakfast" element={< Breakfast active={active} setActive={setActive} datalist={datalist} setDatalist={setDatalist}inputArr={inputArr}setInputArr={setInputArr}/>} />
          <Route path="lunch" element={<Lunch  active={active} setActive={setActive}tableArr={tableArr} setTable={setTableArr}  />} />
         <Route path="add-lunch" element={<AddLunch active={active} setActive={setActive} />}/>
          <Route path="Add-breakfast" element={<AddBreakfast active={active} setActive={setActive} datalist={datalist} setDatalist={setDatalist}inputArr={inputArr}setInputArr={setInputArr}/>}/>
          <Route path="dinner" element={<Dinner   active={active} setActive={setActive}/>} />
          <Route path="Add-dinner" element={<AddDinner active={active} setActive={setActive} />} />
        </Routes>
      </BrowserRouter>
     
    
    
    </>
  );
};

export default App;
