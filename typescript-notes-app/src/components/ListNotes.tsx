import React from 'react'
import { Note } from '../model/note.model'
import { Notes } from './Notes'

interface IListNotesProps {
    notes: Note[]
}

export const ListNotes: React.FC<IListNotesProps> = ({ notes }) => {
    return (
        <div>
            <h2 className='mt-4'>Notes</h2>
            <div>{notes.map(note =>
                <Notes key={note.id} note={note} />
            )}</div>
        </div>
    )
}
