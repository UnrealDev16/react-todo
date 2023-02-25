import { alpha } from '@mui/material';
import React,{useState} from 'react'
import './App.css';
import Tsks from './Components/Tasks';
const core = require("@mui/material")

function App() {

  let date = new Date()

  const [notes, setNotes] = useState([
  ]);

  function clearText(){
    document.getElementById("note-text").value = "";
  }

  function AddNote() {
    const noteInput = document.getElementById('note-text');
    if (noteInput.value.trim() !== '') {
      setNotes([...notes, { task: noteInput.value, time: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}]);
      setTimeout(clearText,0)
    }
  }

  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      AddNote();
      setTimeout(clearText,0)
    }
  }
  
  document.addEventListener('keyup', handleKeyUp);

  return (
    <div className="App">
      <div className="input-container">
        <center>
          <core.TextField id="note-text" variant="outlined" label="Note" type="text" />
          <core.Button variant="outlined" onClick={AddNote} id={"Add"}>
            Add Note
          </core.Button>
        </center>
      </div>
      <Tsks className={"tsks"} notes={notes} />
    </div>
  );
}

export default App;
