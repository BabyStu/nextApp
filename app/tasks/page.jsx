import Link from "next/link";
import Tasks from "../components/Tasks";
import React from "react";

const TaskPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Tasks />
      <div className="flex justify-center mt-auto">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-0 px-4 rounded">
          <Link href="/notes">Notes</Link>
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

export default TaskPage;
