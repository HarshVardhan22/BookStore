import React from "react"
import Navbar from "./components/Navbar"
import Herosection from "./components/Herosection"
import "./App.css"
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Herosection/>
        <div className="themeSwitch">
        <label className="switch">
         <input type="checkbox"/>
         <span className="slider round"></span>
         </label> 
         </div>
    </div>
  );
}

export default App;
