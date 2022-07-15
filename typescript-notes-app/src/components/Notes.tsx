import React from 'react'
import { Note } from '../model/note.model'
import "./Notes.css"

interface INotesProps {
    note : Note,
}

export const Notes: React.FC <INotesProps> = ({note}) => {
  return (
      <div className='notes-container'>
          <h3>{note.title}</h3>
          <p className='text-light'>{note.body}</p>
          <button className="notes-btn">Delete</button>
      </div>
  )
}
