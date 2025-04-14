import React, { FC } from "react";
import StickyNotes from "./StickyNotes";

type NotesProps = {
  notes: Note[];
  starNote: (noteId: number) => void;
  deleteNote: (noteId: number) => void;
};

const Notes: FC<NotesProps> = ({ notes, starNote, deleteNote }) => {
  return (
    <>
      <ul className="mx-auto place-items-center grid grid-cols-3">
        {notes.map((noteItem) => {
          return (
            <StickyNotes
              deleteNote={deleteNote}
              starNote={starNote}
              key={noteItem._id}
              note={noteItem}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Notes;
