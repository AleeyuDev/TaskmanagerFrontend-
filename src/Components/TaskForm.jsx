import React, { useState } from "react";
import axios from "axios";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/tasks/", { title, description });
    // fetchTasks();
  };

  return (
    <>
      <div className=" ">
        <div className="flex flex-col    justify-center  items-center  py-8 mx-auto px-4 ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col  space-y-4">
              <label className="text-2xl font-bold"> Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="my-4 rounded-sm"
              />
              <div className=" flex flex-col">
                <label className="text-2xl font-bold"> Description </label>
                <textarea
                  rows={15}
                  cols={50}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="mt-8 mx-auto flex justify-center items-center">
              <button
                className=" bg-blue-600 py-2 rounded-full   text-white px-8 "
                type="submit">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
