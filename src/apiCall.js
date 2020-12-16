import {API} from "./Config";

export const add = (book)=>{
    console.log(book)
    //using fetch to send data to backend

    return fetch(`${API}book/create/`,{
        method:'POST',
        headers:{
          "Accept":'application/json',
          "Content-Type": 'multipart/form-data'
        },
        body: JSON.stringify(book)
    }).then(res => {console.log( res.json())})
      .catch(err => {return console.log(err);});
  };

  export const addCat = (cat)=>{
   
    //using fetch to send data to backend

    return fetch(`${API}category/create/`,{
        method:'POST',
        headers:{
          Accept:'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(cat)
    }).then(res => {return res.json();})
      .catch(err => {return console.log(err);});
  };