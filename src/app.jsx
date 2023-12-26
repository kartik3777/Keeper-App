import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(props) {

    const [notes,setNotes] = useState([]);

    function addNote(newNote){
            setNotes(prevValue => {
                return [...prevValue, newNote];
               })
    }

    function deleteItem(id){
   setNotes(prevValue => {
    return prevValue.filter((text,index) => {
       return index !== id;
    })
   })
    }
  
 
   
  return (
    <div>
      <Header />
      <CreateArea 
      
      onAdd ={addNote}
      />
   {  notes.map((noteitem,index) => {
        return < Note
        
        key ={index}
        delete ={deleteItem}
        id ={index}
           title = {noteitem.title}
           content ={noteitem.content}
         /> ;
        }
     )}
      <Footer />

    </div>
  );
}

export default App;
