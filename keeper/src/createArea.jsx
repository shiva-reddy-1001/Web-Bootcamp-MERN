import React from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    var [title,setTitle] = React.useState("");
    var [content,setContent] = React.useState("");
  return (
    <div>
      <form className="create-note">
        {content && <input onChange={(event)=>setTitle(event.target.value)} value={title} name="title" placeholder="Title" />}
        <textarea onChange={(event)=>setContent(event.target.value)} value={content} name="content" placeholder="Take a note..." rows={content ? "3":"0"}></textarea>
        <Zoom in={content ? true : false}>
        <Fab onClick={(event)=>
        {props.onSubmit(title,content)
        event.preventDefault()
        setTitle("")
        setContent("")
        }
        }><AddCircleIcon></AddCircleIcon></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
