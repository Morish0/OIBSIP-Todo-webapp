import { useState } from "react";
import axios from "axios";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const res = await axios.post("/api/tasks", { title });
      onTaskAdded(res.data); // Update parent state
      setTitle(""); // Clear input
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary mt-2">Add Task</button>
    </form>
  );
}

export default TaskForm;
