import React, { useContext, useState } from "react";
import "./AddBook.css";
import { ThemeContext } from "./themeContext";
import {add} from "../apiCall";

const AddBook = () => {
  const fromContext = useContext(ThemeContext);
  const theme = fromContext.theme;

  const [value, setValue] = useState({
    name: "",
    description: "",
    price: "",
    category:"",
    quantity: "",
    
    author: "",
    publication: "",
    link: "",
    error: "",
    success: false,
  });

  const {
    name,
    description,
    price,
    category,
    quantity,
    
    author,
    publication,
    link,
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
    console.log("submit")
    add({
      name,
      description,
      price,
      category,
      quantity,
      author,
      publication,
      link,
    }).then((data) => {
      if (data.error) {
        setValue({ ...value, error: data.error, success: false });
      } else {
        setValue({
          ...value,
          name: "",
          description: "",
          price: "",
          category:"",
          quantity: "",
          author: "",
          publication: "",
          link: "",
          error: "",
          success: true,
        });
        console.log(data)
      }
    });
  };

  return (
    <form className="search">
      <div className="inputField">
        <label htmlFor="bookName" style={{ color: `${theme.textColor}` }}>
          Name
        </label>
        <input
          type="search"
          placeholder="Enter Book Name"
          name="bookName"
          value = {name}
          onChange={handleChange("name")}
          style={{
            background: `${theme.inputColor}`,
            color: `${theme.textColor}`,
          }}
        />
      </div>
      <div className="inputField">
        <label htmlFor="bookName" style={{ color: `${theme.textColor}` }}>
          Description
        </label>
        <input
          type="search"
          placeholder="Enter Description"
          name="bookName"
          value = {description}
          onChange={handleChange("description")}
          style={{
            background: `${theme.inputColor}`,
            color: `${theme.textColor}`,
          }}
        />
      </div>
      <div className="inputField"></div>
      <div className="inputField">
        <label htmlFor="bookName" style={{ color: `${theme.textColor}` }}>
          Price
        </label>
        <input
          type="search"
          placeholder="Enter Price"
          name="bookName"
          value = {price}
          onChange={handleChange("price")}
          style={{
            background: `${theme.inputColor}`,
            color: `${theme.textColor}`,
          }}
        />
      </div>
      <div className="inputField">
        <label htmlFor="bookName" style={{ color: `${theme.textColor}` }}>
          Category
        </label>
        <input
          type="search"
          placeholder="Enter Category"
          name="bookName"
          value = {category}
          onChange={handleChange("category")}
          style={{
            background: `${theme.inputColor}`,
            color: `${theme.textColor}`,
          }}
        />
      </div>
      <div className="inputField">
        <label htmlFor="bookName" style={{ color: `${theme.textColor}` }}>
          Quantity
        </label>
        <input
          type="search"
          placeholder="Enter Quantity"
          name="bookName"
          value = {quantity}
          onChange={handleChange("quantity")}
          style={{
            background: `${theme.inputColor}`,
            color: `${theme.textColor}`,
          }}
        />
      </div>
      <div className="inputField">
        <label htmlFor="bookName" style={{ color: `${theme.textColor}` }}>
          Author
        </label>
        <input
          type="search"
          placeholder="Enter Author Name"
          name="bookName"
          value={author}
          onChange={handleChange("author")}
          style={{
            background: `${theme.inputColor}`,
            color: `${theme.textColor}`,
          }}
        />
      </div>
      <div className="inputField">
        <label htmlFor="bookName" style={{ color: `${theme.textColor}` }}>
          Publication
        </label>
        <input
          type="search"
          placeholder="Enter Publication Name"
          name="bookName"
          value = {publication}
          onChange={handleChange("publication")}
          style={{
            background: `${theme.inputColor}`,
            color: `${theme.textColor}`,
          }}
        />
      </div>
      <div className="inputField">
        
        <label htmlFor="bookName" style={{ color: `${theme.textColor}` }}>
          Link
        </label>
        <input
          type="search"
          placeholder="Enter Link"
          name="bookName"
          value = {link}
          onChange={handleChange("link")}
          style={{
            background: `${theme.inputColor}`,
            color: `${theme.textColor}`,
          }}
        />
      </div>
      <button onClick={clickSubmit}>Submit</button>
    </form>
  );
};

export default AddBook;
