import { useState, useEffect } from "react";
import Header from "./core/Header";
import Tasks from "./core/Tasks";
import AddTask from "./core/AddTask";
const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // fetch data (tasks)
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    console.log(data);
    return data;
  };
  // fetch data (one task)
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  };

  // Show Add Task
  const [showAddForm, setShowAddForm] = useState(false);

  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([data, ...tasks]);

    //console.log("add :", task);
    //const id = Math.floor(Math.random() * 10000) + 1;
    //const newTask = { id, ...task };
  };

  //Delete Task
  const deleteTask = async (id) => {
    //console.log("delete: ", id);
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    //console.log("toggle: ", id);
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        //task.id === id ? { ...task, reminder: !task.reminder } : task
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  //show Add Form
  const showForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="container">
      <Header
        show={showForm}
        isShown={showAddForm}
        title={"Task Application"}
      />
      {showAddForm && <AddTask onAdd={addTask} />}
      <br />
      <hr />
      <br />
      {tasks.length ? (
        <Tasks
          tasks={tasks}
          onDeleteApp={deleteTask}
          onToggleApp={toggleReminder}
        />
      ) : (
        <div className="task" style={{ background: "red", color: "white" }}>
          <h3>No Task</h3>
        </div>
      )}

    </div>
  );
};

export default Home;
