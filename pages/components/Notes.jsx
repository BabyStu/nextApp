import { useState, useEffect } from "react";
import Delete from "./Delete.jsx";

const NoteTakingComponent = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedNotes = localStorage.getItem("notes");
      setNotes(savedNotes ? JSON.parse(savedNotes) : []);
    }
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSave = () => {
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes, { title, content }];
      if (typeof window !== 'undefined') {
        localStorage.setItem("notes", JSON.stringify(newNotes));
      }
      return newNotes;
    });
    setTitle("");
    setContent("");
  };

  const handleDelete = (index) => {
    setNotes((prevNotes) => {
      const newNotes = prevNotes.filter((note, i) => i !== index);
      if (typeof window !== 'undefined') {
        localStorage.setItem("notes", JSON.stringify(newNotes));
      }
      return newNotes;
    });
  };

  return (
    <div>
      <div className="flex justify-center w-full border-4 p-2 my-2 gap-1">
        <div className="flex-col w-full">
          <h1 className="flex justify-center font-bold">Topic</h1>
          <input
            className="border-2 border-gray-300 p-2 w-full text-black"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
        </div>
        <div className="flex-col w-full">
          <h1 className="flex justify-center font-bold">Description</h1>
          <textarea
            className="border-2 border-gray-300 p-2 w-full text-black"
            value={content}
            onChange={handleContentChange}
            placeholder="Note"
          />
        </div>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          New Note
        </button>
      </div>
      <h1 className="text-5xl font-extrabold tracking-widest flex justify-center my-6 underline">NOTES</h1>
      <ul>
        {notes.map((note, index) => (
          <li className="border my-2 mx-8 p-2" key={index}>
            <div className="flex justify-between">
              <div className="w-full">
                <h1 className="text-lg font-bold">{note.title}</h1>
                <p className="text-base m-2">{note.content}</p>
              </div>
              <div>
                <Delete onDelete={() => handleDelete(index)} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteTakingComponent;