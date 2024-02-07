import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 text-3xl">
      <div className="transform transition-transform hover:scale-110 hover:font-bold hover:underline">
        <Link href="/notes">Notes</Link>
      </div>
      <div className="transform transition-transform hover:scale-110 hover:font-bold hover:underline">
        <Link href="/tasks">Tasks</Link>
      </div>
      <div className="transform transition-transform hover:scale-110 hover:font-bold hover:underline">
        <Link href="/calendar">Calendar</Link>
      </div>
    </main>
  );
}
