import { useState } from "react";
import "./App.css";
import Notes from "./component/Notes";

function App() {
  const [notes, setNotes] = useState<Notes[]>([
    { text: "note 1", id: 1, starred: true },
    { text: "note 2", id: 2, starred: false },
    { text: "note 3", id: 3, starred: true },
    { text: "note 4", id: 4, starred: false },
    { text: "note 5", id: 5, starred: true },
    { text: "note 6", id: 6, starred: false },
    { text: "note 7", id: 7, starred: true },
  ]);
  const starNote = (noteId : number)=>{
    setNotes(
      notes.map((noteItem)=>{
        if (noteItem.id === noteId) {
          return {
            ...noteItem,
            starred: !noteItem.starred
          }
        }
        return noteItem
      })
    )
  }
  const deleteNote = (noteId : number)=>{
  setNotes(
    notes.filter((noteItem)=>{
      return noteItem.id !== noteId
    })
  )
  }

  return (
    <div className="text-center mt-20">
      <Notes deleteNote={deleteNote} starNote={starNote} notes={notes}/>
    </div>
  );
}

export default App;
