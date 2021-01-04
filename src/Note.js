import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

export default function Note(props){
    const deleteNote = () =>{
        props.deleteItem(props.id);
    }
    let pause = true;
    let mark
    const Mark = () =>{
        pause  = !pause;
        if(pause === false){
            mark = {
                backgroundColor:"yellow"
            }
        }
        else{
            mark = {
                backgroundColor:"white"
            }
        }
        return;
    }
    
    return (
        <>
        <div className="note"> 
            <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            <button className="btn_str" onClick={Mark} style={mark} >
                <CheckBoxOutlineBlankIcon/>
            </button>
            <button className="btn" onClick={deleteNote}>
            <DeleteOutlineIcon className="deleteIcon" />
            </button>
        </div>
        </>
    )
}