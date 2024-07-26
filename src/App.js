import React from 'react';
import { NoteProvider } from './context/NoteContext';
import NoteList from './components/NoteList';
import AddNoteForm from './components/AddNoteForm';

function App() {
  return (
    <NoteProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Simple Note Taking App</h1>
        <AddNoteForm />
        <NoteList />
      </div>
    </NoteProvider>
  )
}

export default App