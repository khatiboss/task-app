const tasks = [
  {
    id: 1,
    text: "ReactJS",
  },
  {
    id: 2,
    text: "VueJS",
  },
  {
    id: 3,
    text: "Angular",
  },
];
const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
