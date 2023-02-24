import React,{useState} from 'react'
import './App.css';
import Note from './Components/Note';

function App() {

  let tasks = []

  return (
    <div className="App">
      <Note/>
    </div>
  );
}

export default App;
