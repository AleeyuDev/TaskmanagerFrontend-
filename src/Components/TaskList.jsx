import React, { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const apikey = process.env;
  const fetchTasks = async () => {
    const response = await axios.get(`${apikey}/api/tasks/`);
    console.log(response.data);
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="   container  px-4   ">
      <div className="text-center mb-8 ">
        <h1 className="font-bold  text-2xl "> List of task created</h1>
      </div>
      <div className="grid md:grid-cols-2 mx-auto  md:gap-x-8 lg:mx-32 ">
        {tasks.map((task) => (
          <Task key={task.id} task={task} fetchTasks={fetchTasks} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
