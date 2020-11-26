import React from "react";
import "./Navbar.css"
const Navbar = () =>{
    return(
        <div className = "container">
            <div className = "leftSide">LOGO</div>
            <div className = "rightSide">
                <div className = "brand">Brand Name</div>
                <div>Tag line</div>
            </div>
        </div>
    );
}

export default Navbar;