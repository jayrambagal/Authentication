import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<ErrorPage/> }/>
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </div>
  );
}

export default App;
