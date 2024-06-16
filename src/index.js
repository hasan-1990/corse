import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Corses from "./Component/Corses";
import Corse from "./Component/Corse";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}  >
          <Route path="/Corse" element={<Corses />} >
            <Route path=":id" element={<Corse />} ></Route>
          </Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);