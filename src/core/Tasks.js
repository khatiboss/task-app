import Task from "./Task";

const Tasks = ({ tasks, onDeleteApp, onToggleApp }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          //key={task.id}
          key={index}
          task={task}
          onDeleteTasks={onDeleteApp}
          onToggleTasks={onToggleApp}
        />
      ))}
    </>
  );
};

export default Tasks;
