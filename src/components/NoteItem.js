import React, { useContext, useState } from 'react';
import { NoteContext } from '../context/NoteContext';

const NoteItem = ({ note }) => {
  const { deleteNote, updateNote } = useContext(NoteContext);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleUpdate = () => {
    updateNote(note.id, title, content);
    setIsEditing(false);
  };

  return (
    <div className="border p-4 mb-4 rounded">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          ></textarea>
          <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 rounded mr-2">Save</button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold">{note.title}</h3>
          <p>{note.content}</p>
          <p className="text-gray-500 text-sm">Last updated: {new Date(note.timestamp).toLocaleString()}</p>
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</button>
          <button onClick={() => deleteNote(note.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      )}
    </div>
  );
};

export default NoteItem;
