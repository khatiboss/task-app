import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDeleteTasks, onToggleTasks }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggleTasks(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDeleteTasks(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
