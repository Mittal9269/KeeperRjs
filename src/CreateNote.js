import react, { useState } from "react";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";

export default function CreateNote(props){
    const [note,setNote] = useState({
        title:'',
        content:'',
    })
    const InputEvent =(event)=>{
        const {value,name} = event.target;
        setNote((preData) =>{
            return{
                ...preData,
                [name]:value,
            }
        })
    }
    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })
    }

    return (
        <>
        <div className="main_note">
            <form>
                <input type ="text" placeholder="Title"
                autoComplete="off"
                value={note.title}
                name ="title"
                onChange={InputEvent}
                />
                <textarea rows='' column='' placeholder='Write a note...'
                value={note.content}
                name ="content"
                onChange={InputEvent}
                ></textarea>
                <Button onClick={addEvent}>
                    <Add className="plus_sign" />
                </Button>
            </form>
        </div>
        </>
    )
}