import React,{useContext,useState} from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import "./App.css";
import {ThemeContext} from './components/themeContext'


const App = () =>{
  
  const fromContext = useContext(ThemeContext);

  const theme = fromContext.theme;

  const toggler = fromContext.toggler;

  document.body.style.background = `${theme.backgroundColor}`

 
  return (
    
    <div className="App">
        <Navbar></Navbar>
        <Herosection/>
        <div className="themeSwitch" onChange = {toggler}>
        <label className="switch">
         <input type="checkbox"/>
         <span className="slider round"></span>
         </label> 
         </div>
    </div>
  );
}

export default App;
