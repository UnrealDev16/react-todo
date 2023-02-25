import { alignProperty } from "@mui/material/styles/cssUtils";
import React,{useState} from "react";
import "../App.css"
const core = require("@mui/material")

function Tsks(props){
    return(
    <div>
        <core.TableContainer
          component={"Paper"} 
          variant="outlined"
        >
          <core.Table aria-label="demo table">
            <core.TableHead>
              <core.TableRow>
                <core.TableCell>Note</core.TableCell>
                <core.TableCell>Time</core.TableCell>
              </core.TableRow>
            </core.TableHead>
            <core.TableBody>
              {props.notes.map((note, index) => {
                return (
                  <core.TableRow key={index}>
                    <core.TableCell style={{whiteSpace: "normal",wordWrap:"normal",overflow:"hidden"}}>{note.task}</core.TableCell>
                    <core.TableCell>{note.time}</core.TableCell>
                    <core.Button onClick={() => props.removeNote(index)} variant="text">Delete</core.Button>
                  </core.TableRow>
                );
              })}
            </core.TableBody>
          </core.Table>
        </core.TableContainer>
    </div>)
}

export default Tsks;
