import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Login from "./pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Breakfast from "./pages/Breakfast";
import Dinner from "./pages/Dinner";
import Lunch from "./pages/Lunch";
import AddBreakfast from "./components/form/Addbreakfast";
import AddLunch from "./components/form/AddLunch";
import AddDinner from "./components/form/AddDinner";
import { useState } from "react";
import Userdata from "./components/form/Userdata";
import Userdatatable from "./pages/Userdatatable";
import Ftsuserdata  from "./components/form/Ftsuserdata";
import Ftsdatatable from "./pages/Ftsdatatable";

const App = () => {
  const [active, setActive] = useState();
  const [datalist, setDatalist] = useState({
    // id:1,id:2,id:3,
    name: "",
    phoneNumber: "",
    dateofbirth: "",
    gender: "",
    email: "",
    lunchlist: "",
    cost: "",
    text: "",
    input: "",
    object: "",
    state: "",
    pin: "",
    boolean: "",
    array: "",

    product: [],
    quantity: [],
    price: "",
    test: "",
    array: "",
    map: "",
    zip: "",
    code: "",
    example: "",
    list: "",

    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const [inputArr, setInputArr] = useState([]);
  const [changeArr, setChangeArr] = useState([]);
  const [arrList, setArrList] = useState([]);
 const data = window.location.pathname
 console.log(data);
 if(data==="/")
 {
  localStorage.clear()
 }
  // setInputArr([...inputArr,datalist])

  // // const navigate = useNavigate();

  return (
    <>
      {/* <Foods />   */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="breakfast"
            element={
              <Breakfast
                active={active}
                setActive={setActive}
                datalist={datalist}
                setDatalist={setDatalist}
                inputArr={inputArr}
                setInputArr={setInputArr}
              />
            }
          />
          <Route
            path="lunch"
            element={
              <Lunch
                active={active}
                setActive={setActive}
                changeArr={changeArr}
                setChangeArr={setChangeArr}
                inputArr={inputArr}
              />
            }
          />
          <Route
            path="add-lunch"
            element={
              <AddLunch
                active={active}
                setActive={setActive}
                changeArr={changeArr}
                setChangeArr={setChangeArr}
              />
            }
          />
          <Route
            path="add-breakfast"
            element={
              <AddBreakfast
                active={active}
                setActive={setActive}
                datalist={datalist}
                setDatalist={setDatalist}
                inputArr={inputArr}
                setInputArr={setInputArr}
              />
            }
          />
          <Route
            path="dinner"
            element={
              <Dinner
                active={active}
                setActive={setActive}
                arrList={arrList}
                setArrList={setArrList}
              />
            }
          />
          <Route
            path="add-dinner"
            element={
              <AddDinner
                active={active}
                setActive={setActive}
                arrList={arrList}
                setArrList={setArrList}
              />
            }
          />
             <Route
            path="Userdata"
            element={<Userdata active={active} setActive={setActive} />}
          />

          <Route
            path="User-data-table"
            element={<Userdatatable active={active} setActive={setActive} />}
          />

          <Route
            path="/fts-user-data/:id?"
            element={<Ftsuserdata active={active} setActive={setActive} />}
          />
                 <Route
            path="fts-data-table"
            element={<Ftsdatatable active={active} setActive={setActive} />}
          />
        
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
