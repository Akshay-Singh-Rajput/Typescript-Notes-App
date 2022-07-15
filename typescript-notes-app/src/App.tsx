import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { ListNotes } from './components/ListNotes';
import { Note } from './model/note.model';

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      title: "Demo Title",
      body: "This is just a demo content"
    }
  ]);

  const getApicall = (): void => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getApicall()
  }, [])
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <ListNotes notes={notes} />
      </div>
    </div>
  );
}

export default App;
