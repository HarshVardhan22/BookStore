import React,{useContext} from "react";
import "./Navbar.css";
import {ThemeContext} from "./themeContext";
import {Link} from "react-router-dom";

const Navbar = () =>{
    const fromContext = useContext(ThemeContext);
    const theme = fromContext.theme;

    return (
      <div
        className="container"
        style={{
          background: `${theme.navbarColor}`,
          color: `${theme.textColor}`,
        }}
      >
        <div className="leftSide">LOGO</div>
        <div className="rightSide">
          
            <Link to="/addcategory">
              Add category
            </Link>

            <Link to="/addbook">
              Add books
            </Link>

            <Link to="/findbook">
              Find Books
            </Link>
        
        </div>
      </div>
    );
}

export default Navbar;