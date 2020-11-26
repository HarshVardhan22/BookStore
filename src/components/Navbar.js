import React,{useContext} from "react";
import "./Navbar.css";
import {ThemeContext} from "./themeContext";

const Navbar = () =>{
    const fromContext = useContext(ThemeContext);
    const theme = fromContext.theme;

    return(
        <div className = "container" style = {{background : `${theme.navbarColor}`, color:`${theme.textColor}`}}>
            <div className = "leftSide">LOGO</div>
            <div className = "rightSide">
                <div className = "brand">Brand Name</div>
                <div>Tag line</div>
            </div>
        </div>
    );
}

export default Navbar;