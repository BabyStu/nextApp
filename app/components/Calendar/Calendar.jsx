"use client";

import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarOverride.css';

const CalendarComponent = () => {
  const [tasks, setTasks] = useState([]);
  const localizer = momentLocalizer(moment);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    setTasks(savedTasks ? JSON.parse(savedTasks) : []);
  }, []);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSave = () => {
    if (!title || !date) {
      alert('Task and Date are required for an entry.');
      return;
    }
  
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks, { 
        title, 
        description: description || '', 
        time: time || '23:00', 
        date 
      }];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  
    setTitle("");
    setDescription("");
    setTime("");
    setDate("");
  };

  const events = tasks.map(task => ({
    title: task.title,
    start: new Date(task.date + 'T' + task.time),
    end: new Date(task.date + 'T' + task.time),
  }));

  return (
    <div>
      <div className="">
        <div className="flex justify-center w-full border-4 p-2 m-2 gap-1">
          <div className="flex-col w-full">
            <h1 className="flex justify-center font-bold">Task</h1>
            <input
              className="border-2 border-gray-300 p-2 w-full text-black"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Task"
            />
          </div>
          <div className="flex-col w-full">
            <h1 className="flex justify-center font-bold">Description</h1>
            <textarea
              className="border-2 border-gray-300 p-2 w-full text-black"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div className="flex-col w-full">
            <h1 className="flex justify-center font-bold">Time</h1>
            <input
              className="border-2 border-gray-300 p-2 w-full text-black"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="flex-col w-full">
            <h1 className="flex justify-center font-bold">Date</h1>
            <input
              className="border-2 border-gray-300 p-2 w-full text-black"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="flex">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSave}
            >
              New Task
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-5xl font-extrabold tracking-widest flex justify-center my-6 underline">
        TASK CALENDAR
        </h1>
      <div className="m-8">
      <Calendar
  localizer={localizer}
  events={events}
  startAccessor="start"
  endAccessor="end"
  style={{ height: 500 }}
  toolbar={false}
/>
      </div>
    </div>
  );
};

export default CalendarComponent;