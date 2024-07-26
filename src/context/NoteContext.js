import React, { createContext, useState, useEffect } from 'react';
import { Note } from '../models/note';

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content) => {
    const newNote = new Note(
      Date.now(),
      title,
      content,
      new Date().toISOString()
    );
    setNotes([...notes, newNote]);
  };

  const updateNote = (id, title, content) => {
    const updatedNotes = notes.map(note => 
      note.id === id ? { ...note, title, content, timestamp: new Date().toISOString() } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteProvider };
