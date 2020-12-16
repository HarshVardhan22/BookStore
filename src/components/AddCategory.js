import React, { useContext, useState } from "react";
import "./AddCategory.css";
import { ThemeContext } from "./themeContext";
import {addCat} from "../apiCall"

const AddCategory = () => {
  const fromContext = useContext(ThemeContext);
  const theme = fromContext.theme;

  const [value, setValue] = useState({
    name: "",
    error: "",
    success: false,
  });

  const {
    name,
    error,
    success,
  } = value;
  //handlechange is a higher order function i.e its a function which returns another function
  //changed const handleChange = name => event => {
  const handleChange = (property) => (event) => {
    setValue({ ...value,  error: false,[property]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();

    //signUp(name,email,password) but instead of sending 3 different params
    //we can also send them as one object, say "user" with 3 props;
    //As in objects is the name of prop is same as the value i.e apple:apple, them we can write only apple
    //as in this case : signUp({name:name,email:email,password:password}) === |
    //                                                                        V
  
    addCat({
      name
    }).then((data) => {
      if (data.error) {
        setValue({ ...value, error: data.error, success: false });
      } else {
        setValue({
          ...value,
          name: "",
          error: "", //if user has typo or something
          success: true,
        });
      }
    });
  }
 

  return (
    <form className="search">
         <h1>Add category</h1>
      <div className="inputField">
        <label htmlFor="bookName" style={{ color: `${theme.textColor}` }}>
          Name
        </label>
        <input
          type="search"
          placeholder="Enter Book Name"
          name="bookName"
          value={name}
          onChange={handleChange("name")}
          style={{
            background: `${theme.inputColor}`,
            color: `${theme.textColor}`,
          }}
        />
      </div>
      <button onClick={clickSubmit}>Submit</button>
      {JSON.stringify({name})}
    </form>
  );
};

export default AddCategory;
