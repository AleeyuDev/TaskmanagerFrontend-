import React from "react";
import axios from "axios";

const Task = ({ task, fetchTasks }) => {
  const deleteTask = async () => {
    await axios.delete(`/api/tasks/${task.id}/`);
    fetchTasks();
  };

  return (
    <div className="">
      <div
        className="container  
       py-5       w-full  mx-auto  ">
        <div className="bg-[#eee] rounded   py-4 p-4  mx-auto  max-w-sm   justify-center items-center">
          <div className="">
            <div>
              <h3 className="text-lg font-bold  ">Title: {task.title}</h3>
              <p className="text-wrap">
                <span className="font-bold">description:</span>

                {task.description}
              </p>
            </div>
            <div className="mx-8 ml-8 mt-4 flex justify-center items-center">
              <button
                className=" bg-blue-600 px-4 py-1 rounded-full text-white"
                onClick={deleteTask}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
