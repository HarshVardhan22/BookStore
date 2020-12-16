import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import AddBook from "./components/AddBook";
import FindBook from "./components/FindBook";
import AddCategory from "./components/AddCategory";
import Navbar from "./components/Navbar"
const Routes = () =>{
    return(
        
        <BrowserRouter>
            <Switch>
            <div>
            <Navbar></Navbar>
                <Route path= "/" exact component = {App}/>
                <Route path= "/addbook" exact component = {AddBook}/>
                <Route path= "/addcategory" exact component = {AddCategory}/>
                <Route path= "/findbook" exact component = {FindBook}/>
            </div>
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;