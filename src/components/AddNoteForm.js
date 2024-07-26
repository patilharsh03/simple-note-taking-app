import React, { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';

const AddNoteForm = () => {
  const { addNote } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-2xl font-bold mb-4">Add Note</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full mb-2 p-2 border rounded"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="w-full mb-2 p-2 border rounded"
        required
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Note</button>
    </form>
  );
};

export default AddNoteForm;
