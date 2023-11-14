import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Foods from "./pages/Foods";
import Login from "./login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Breakfast from "./components/breakfast/Breakfast";
import Dinner from "./components/dinner/Dinner";
import Lunch from "./components/lunch/Lunch";
import Sidebor from "./components/breakfast/Sidebar";
import Header from "./components/breakfast/Header";
// import Content from "./components/breakfast/Content";

const App = () => {
  return (
    <>
      {/* <Foods />   */}

      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="breakfast" element={<Breakfast />} />
          <Route path="lunch" element={<Lunch />} />
          <Route path="dinner" element={<Dinner />} />
        </Routes>
      </BrowserRouter>

    
    </>
  );
};

export default App;
