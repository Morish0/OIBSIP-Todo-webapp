import { useState } from "react";
import axios from "axios";

function TaskList({ tasks, setTasks }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const markCompleted = async (taskId) => {
    try {
      const res = await axios.put(`/api/tasks/${taskId}`, { completed: true, completedAt: new Date() });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, completed: true, completedAt: res.data.completedAt } : task
        )
      );
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`/api/tasks/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const editTask = (task) => {
    setEditingTaskId(task._id);
    setNewTitle(task.title);
  };

  const updateTask = async (taskId) => {
    try {
      await axios.put(`/api/tasks/${taskId}`, { title: newTitle });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === taskId ? { ...task, title: newTitle } : task
        )
      );
      setEditingTaskId(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center fade-in">
          {editingTaskId === task._id ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="form-control"
            />
          ) : (
            <span className={task.completed ? "completed-task" : ""}>
              {task.title} <br />
              <small className="text-muted">Created: {new Date(task.createdAt).toLocaleString()}</small>
              {task.completed && (
                <small className="text-success d-block">Completed: {new Date(task.completedAt).toLocaleString()}</small>
              )}
            </span>
          )}

          <div>
            {editingTaskId === task._id ? (
              <button className="btn btn-success btn-sm me-2" onClick={() => updateTask(task._id)}>
                ✅ Save
              </button>
            ) : (
              <button className="btn btn-warning btn-sm me-2" onClick={() => editTask(task)}>
                ✏️ Edit
              </button>
            )}
            {!task.completed && (
              <button className="btn btn-success btn-sm me-2" onClick={() => markCompleted(task._id)}>
                ✔ Complete
              </button>
            )}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task._id)}>
              🗑 Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
