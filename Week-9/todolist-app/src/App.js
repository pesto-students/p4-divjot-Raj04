import "./App.css";
import { useState } from "react";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [taskList, setAddTask] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setAddTask((oldArray) => [...oldArray, event.target.elements.name.value]);
    setInputTask("");
    localStorage.setItem("todolist", taskList);
    console.log(localStorage.getItem("todolist"));
  };
  const setInput = (e) => {
    setInputTask(e.target.value);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            name="name"
            value={inputTask}
            onChange={setInput}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <ol>
          {taskList.map((task, index) => (
            <div key={index}>
              <input value={task} type="checkbox" />
              <span>{task}</span>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
