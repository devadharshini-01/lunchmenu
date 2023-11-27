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
import { useState } from "react";

const App = () => {
  const [active, setActive] = useState();
  return (
    <>
      {/* <Foods />   */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        
          <Route path="breakfast" element={< Breakfast active={active} setActive={setActive}/>} />
          <Route path="lunch" element={<Lunch  active={active} setActive={setActive} />} />
     <Route path="add-lunch" element={<AddLunch active={active} setActive={setActive} />}/>
          <Route path="Add-breakfast" element={<AddBreakfast active={active} setActive={setActive}/>}/>
          <Route path="dinner" element={<Dinner   active={active} setActive={setActive}/>} />
          <Route path="Add-dinner" element={<AddDinner active={active} setActive={setActive} />} />
        </Routes>
      </BrowserRouter>
     
    
    
    </>
  );
};

export default App;
