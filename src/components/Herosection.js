import React from "react";
import "./Herosection.css"
const Herosection = () =>{
 return(
     <div className = 'search'>
        <label htmlFor="bookName">Search For Books</label>
        <input type="search" placeholder = "Enter Book Name" name ="bookName"/>
     </div>
 );

}

export default Herosection;