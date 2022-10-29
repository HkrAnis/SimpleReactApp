import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "/Users/anis.achkar/Desktop/First app/SimpleReactApp/src/Content.js"

function App(){

    return <div>
    <Header></Header>
    <Footer></Footer>
    {notes.map(note=>
        <Note
        key={note.key}
        title={note.title}
        content={note.content}/>
)} 
    </div>
}

export default App