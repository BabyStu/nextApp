import Link from "next/link";
import Calendar from "../components/Calendar/Calendar";
import React from "react";

const CalendarPage = () => {
  return (
    <div>
      <Calendar />
      <div className="flex justify-center">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-0 px-4 rounded">
          <Link href="/tasks">Tasks</Link>
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-0 px-4 rounded">
          <Link href="/">Home</Link>
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-2 py-0 px-4 rounded">
          <Link href="/notes">Notes</Link>
        </button>
      </div>
    </div>
  );
};

export default CalendarPage;
