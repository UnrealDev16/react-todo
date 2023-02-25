import React from "react";
const core = require("@mui/material")

function Note(props){
    return(
        <div>
            <core.TableBody>
                <core.TableRow>
                    <core.TableCell>{props.task}</core.TableCell>
                    <core.TableCell>{props.time}</core.TableCell>
                </core.TableRow>
            </core.TableBody>
        </div>
    )
}

export default Note;