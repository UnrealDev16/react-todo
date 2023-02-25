import React,{useState} from 'react'
import './App.css';
import Tsks from './Components/Tasks';
const core = require("@mui/material")

function App() {
  const [notes, setNotes] = useState([
    { task: 'Hello World', time: '12:00' },
    { task: 'Hi', time: '13:00' },
  ]);

  return (
    <div className="App">
      <core.TextField variant="outlined" label="Note" type="text" />
      <core.Button variant="outlined">Add Note</core.Button>
      <Tsks notes={notes} />
    </div>
  );
}

export default App;
