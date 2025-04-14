  import React, { FC } from "react";
  import Item from "./Item";

  type StickyNotesProps = {
    note: Note,
    starNote : (noteId : number)=> void,
    deleteNote : (noteId : number) => void

  };
  const StickyNotes: FC<StickyNotesProps> = ({ note, starNote, deleteNote }) => {
    return (
      <div className=" flex items-center justify-center p-2">
        <div className="bg-gray-800 shadow-md rounded-2xl w-96 h-36 p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl text-white font-bold">Note #{note.id}</h2>
            {note.starred && <span className="text-yellow-500 text-xl">★</span>}
          </div>
          <div className="flex justify-between">
            <p className="text-white">{note.text}</p>
            <button onClick={()=>{
              starNote(note.id)
            }} className="text-base font-bold text-white">Star</button>
          </div>
            <button onClick={() => {
              deleteNote(note.id)
            }} className="text-base font-bold text-red-700">Delete</button>
        </div>
      </div>
    );
  };

  export default StickyNotes;
