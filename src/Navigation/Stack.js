import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "../screens/Homescreen";
import Contactscreen from "../screens/Contactscreen";
import Aboutscreen from "../screens/Aboutscreen";
import Settingscreen from "../screens/Settingscreen";
import Invalidscreen from "../screens/Invalidscreen";
import Orders from "../screens/Orders";
import Places from "../screens/Places"; 
// const Lazysetting=React.lazy(()=>import (../screens/Settingscreen));

export function Stack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen/>}/>
        <Route path="/homescreen" element={<Homescreen />} />
        <Route path="/Contactscreen" element={<Contactscreen />} />
        <Route path="/Aboutscreen" element={<Aboutscreen />} />
        <Route path="/Settingscreen" element={ <Settingscreen />} />
         <Route path="/Orders" element={<Orders />} />
         <Route path="/Places" element={<Places />} />
        <Route path="*" element={<Invalidscreen />} />
      </Routes> 
      </BrowserRouter>

  );
}

// export default Stack;
