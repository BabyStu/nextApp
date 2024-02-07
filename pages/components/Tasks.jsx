// "use client";

import { useState, useEffect } from "react";
import Delete from "./Delete";

const TasksComponent = () => {
  const [tasks, setTasks] = useState([]);

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
      alert("Title and date are required");
      return;
    }

    setTasks((prevTasks) => {
      const newTasks = [
        ...prevTasks,
        {
          title,
          description: description || "",
          time: time || "23:00",
          date,
        },
      ];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });

    setTitle("");
    setDescription("");
    setTime("");
    setDate("");
  };

  const handleDelete = (index) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((task, i) => i !== index);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

  const today = new Date().toISOString().split("T")[0];

  const todaysTasks = tasks.filter((task) => task.date === today);
  const upcomingTasks = tasks.filter((task) => task.date > today);

  return (
    <div>
      <div className="m-8">
        <div className="flex justify-center w-full border-4 p-6 gap-1">
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
            <input
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
      <h1 className="text-5xl font-extrabold tracking-widest flex justify-center mt-8 underline">
        TASKS
      </h1>
      <div className="flex grid-cols-2 gap-2 justify-evenly pt-2 ">
        <div className="w-full">
          <h1 className="flex justify-center text-xl font-bold my-8 underline">
            Today
          </h1>
          <ul>
            {todaysTasks
              .sort((a, b) => new Date(a.time) - new Date(b.time))
              .map((task, index) => (
                <li className="border my-2 p-2" key={index}>
                  <div className="flex justify-between">
                    <div className="w-full ">
                      <h1 className="text-lg font-bold">{task.title}</h1>
                      <p className="text-base m-2">{task.description}</p>
                      <div className="text-sm italic border-t-2 border-dotted pt-2">
                        Due by{" "}
                        {new Date(
                          "1970-01-01T" + task.time + "Z"
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                    <div>
                      <Delete onDelete={() => handleDelete(index)} />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="w-full">
          <h1 className="flex justify-center text-xl font-bold my-8 underline">
            Upcoming
          </h1>
          <ul>
            {upcomingTasks
              .sort(
                (a, b) =>
                  new Date(a.date + " " + a.time) -
                  new Date(b.date + " " + b.time)
              )
              .map((task, index) => (
                <li className="border my-2 p-2" key={index}>
                  <div className="flex justify-between">
                    <div className="w-full">
                      <h1 className="text-lg font-bold">{task.title}</h1>
                      <p className="text-base m-2">{task.description}</p>
                      <p className="text-sm italic border-t-2 border-dotted pt-2">
                        <span>Due on </span>
                        {new Date(task.date).toLocaleDateString([], {
                          month: "2-digit",
                          day: "2-digit",
                        })}
                      </p>
                    </div>
                    <div className="">
                      <Delete onDelete={() => handleDelete(index)} />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TasksComponent;
