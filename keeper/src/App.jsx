import React from 'react';
import Head from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notess from "./Notes";
import Create from "./createArea";


function App(){
    var [notes,setNotes] = React.useState([]);
    function addNote(title,content){
        setNotes(prev=>{
            var newItem = {
                title : title,content:content,key:5
            }
            return [...prev,newItem];
        })
    }
    function deleteNote(id){
        return setNotes(prev=>{
            return prev.filter((t,index)=>index!==id);
        })
    }
    return (
        <div>
        <Head></Head>
        <Create onSubmit={addNote} ></Create>
        {notes.map( (x,i) => (<Note onDelete={deleteNote} key={x.key} id={i} title={x.title} content={x.content}></Note>))}
        <Footer></Footer>
        </div>
    );
}

export default App;