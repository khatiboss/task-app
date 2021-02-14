import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    //1-disable page refresh
    e.preventDefault();
    //2-validation
    if (!text) {
      alert("Please enter the task text");
      return;
    }
    //3-calling method
    //onAdd({ id: 6, text, day, reminder });
    onAdd({ text, day, reminder });
    //4-clear form
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-from" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day</label>
        <input
          type="date"
          placeholder="Add Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
