import './App.css';
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
function App() {
  const [addItem,setAddItem] = useState([]);
  const addNote = (note)=>{
    // console.log("I am here")
    if(note.content == "" &&  note.title == ""){
      alert("Please enter something");
    }
    else{
      setAddItem((preValue) =>{
        return [...preValue,note]
      })
    }
  }
  const onDelete = (id) =>{
    setAddItem((olddata) =>
      olddata.filter((cur,index) =>{
        return index !== id;
      })
    )
  }
  return (
    <>
      <Header />
      <CreateNote 
        passNote = {addNote}
      />
     {
       addItem.map((val,index) =>{
         return (
           <Note key ={index} id ={index} title ={val.title} content = {val.content} deleteItem ={onDelete} />
         )
       })
     }
      <Footer />
    </>
  );
}

export default App;
