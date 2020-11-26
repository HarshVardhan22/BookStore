import React, {useContext} from "react";
import "./Herosection.css";
import {ThemeContext} from "./themeContext";

const Herosection = () =>{

    const fromContext = useContext(ThemeContext);
    const theme = fromContext.theme;

 return(
     <div className = 'search'>
        <label htmlFor="bookName" style = {{color:`${theme.textColor}`}}>Search For Books</label>
        <input type="search" placeholder = "Enter Book Name" name ="bookName"  style = {{background:`${theme.inputColor}`,color:`${theme.textColor}`}}/>
     </div>
 );

}

export default Herosection;