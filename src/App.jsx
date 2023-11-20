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


const App = () => {
  return (
    <>
      {/* <Foods />   */}

      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="breakfast" element={<Breakfast />} />
          <Route path="lunch" element={<Lunch />} />
     <Route path="addlunch" element={<AddLunch/>}/>
          <Route path="Addbreakfast" element={<AddBreakfast/>}/>
          <Route path="dinner" element={<Dinner />} />
          <Route path="Adddinner" element={<AddDinner />} />
        </Routes>
      </BrowserRouter>
     
    
    
    </>
  );
};

export default App;
