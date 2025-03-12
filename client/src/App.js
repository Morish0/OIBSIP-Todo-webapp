import { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend
  useEffect(() => {
    axios.get("/api/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log("Error fetching tasks:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">To-Do List</h1>
      <TaskForm onTaskAdded={(newTask) => setTasks([...tasks, newTask])} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
