import React, { useState } from 'react';
import './App.css';
import Tsks from './Components/Tasks';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  let date = new Date();

  const [notes, setNotes] = useState([]);

  function clearText() {
    document.getElementById('note-text').value = '';
  }

  function AddNote() {
    const noteInput = document.getElementById('note-text');
    if (noteInput.value.trim() !== '') {
      setNotes([
        ...notes,
        { task: noteInput.value, time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` },
      ]);
      setTimeout(clearText, 0);
    }
  }

  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      AddNote();
      setTimeout(clearText, 0);
    }
  }

  document.addEventListener('keyup', handleKeyUp);

  function RemoveNote(id){
    const newNotes = [...notes]; // create a new array with the same items as notes
    newNotes.splice(id, 1); // remove one item from the new array at the specified index
    setNotes(newNotes); // update the state with the new array
  }

  return (
    <div className="App">
      <div className="input-container">
        <center>
          <TextField id="note-text" variant="outlined" label="Note" type="text" />
          <Button variant="outlined" onClick={AddNote} id={'Add'}>
            Add Note
          </Button>
        </center>
      </div>
      <Tsks className={'tsks'} notes={notes} removeNote={RemoveNote} />
    </div>
  );
}

export default App;
