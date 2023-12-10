import "./App.css";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import React from "react";
import Contact from "./components/Contact/Contact";
import PageNotFound from "./components/404/PageNotFound";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<UnderConstruction />} />
        <Route path="/saved" element={<UnderConstruction />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
