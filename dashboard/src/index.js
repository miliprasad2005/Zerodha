import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./ProtectedRoute";  
import { GeneralContextProvider } from "./components/GeneralContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GeneralContextProvider>
      <Routes>
         { <Route path="/login" element={<Login />} /> }
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/*" element={
          <ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </GeneralContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
