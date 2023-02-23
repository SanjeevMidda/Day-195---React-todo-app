import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import {addNote, deleteNote, updateNote, updateCompleted} from "./store/noteSlice";
import { useState } from "react";

function App() {

  // saving user input when adding a new note
  const[userInput, setUserInput] = useState("");

  // saving user input when amending an existing note
  const[editContent, setEditContent] = useState("");

  // using redux's 'useSelector' method to get a reference to our note's state
  const selectNote = useSelector((state) => state.notes.value);

  // reference to redux's 'useDispatch'. Will be used to dispatch actions to our store 
  const dispatchNote = useDispatch();

  // prevents our form element from refreshing when the user submits a new todo item
  function preventRefresh(e){
    e.preventDefault();
  }

  return (

    // main layout for our app
    <div className="mainLayout">

      <h1 className="title">TODO</h1>
    

      {/* container for note styling. Form element has an onClick which prevents it from refreshing when submitting a new todo item. */} 
      <form className="addNote" onClick={preventRefresh}>

        {/* every time the user enters something it gets saved */}
        <input type="text" placeholder="add item" onChange={(e) => {setUserInput(e.target.value)}}></input>

        {/* when the user clicks the button the note just created gets saved. Several properties are passed in when calling the reducer */}
        <button onClick={() => {dispatchNote(addNote({id: selectNote.length, content: userInput, completed: false}))}} className = "add">add</button>
      </form>

      {/* layout for our notes to display */}
      <div className="displayNotes">

        {/* displaying our saved notes. Each new note has an area to edit it, and also to delete it. */}
        {
          selectNote.map((item, index) => {
            return <div key={index} style={{textDecoration: item.completed ? "line-through": null}}>
            <h1>{item.content}</h1>

            {/* each new note created has an extra area where they can update that note. Input is saved */}
            <input type="text" placeholder="edit item" onChange={(e) => {setEditContent(e.target.value)}}></input>

            {/* after the user has updated the note they can then save it */}
            <button onClick={() => {dispatchNote(updateNote({id: item.id, content: editContent, completed: true}))}} className = "edit">update</button>

            {/* button to delete our note */}
            <button onClick={() => {dispatchNote(deleteNote({id: item.id}))}} className = "delete">delete</button>

            {/* button to mark item as completed */}
            <button onClick={() => {dispatchNote(updateCompleted({id: item.id, completed: true}))}} className = "completed">completed</button>

            </div>
          })
        }
      </div>  

    </div>
  );
}

export default App;
