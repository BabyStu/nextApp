import Link from "next/link";
import Notes from "../components/Notes";
import React from "react";

const NotesPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Notes />
      <div className="flex justify-center mt-auto">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-0 px-4 rounded">
          <Link href="/tasks">Tasks</Link>
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-0 px-4 rounded">
          <Link href="/">Home</Link>
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-0 px-4 rounded">
          <Link href="/calendar">Calendar</Link>
        </button>
      </div>
    </div>
  );
};

export default NotesPage;
