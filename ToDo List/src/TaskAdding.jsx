import InputBox from "./input";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TaskAdding() {
  let [newTask, setnewTask] = useState("");

  function updateTask(event) {
    setnewTask(event.target.value);
  }

  let [taskAdded, settaskAdded] = useState([]);

  function taskadding() {
    if (newTask !== "" && newTask !== taskAdded[taskAdded.length - 1]) {
      settaskAdded([...taskAdded, { task: newTask, id: uuidv4() }]);
      setnewTask("");
    } else {
      alert("task added enter next task to add");
    }
  }

  function deletingTask(id) {
    let upadatedTasks = taskAdded.filter((task) => task.id !== id);
    settaskAdded(upadatedTasks);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      taskadding();
    }
  }

  function deleteAll() {
    settaskAdded([]);
  }

  // function markAsDone(id) {
  //   settaskAdded((taskAdded) => taskAdded.map((task) => {
  //     if (task.id == id) {
  //       return {
  //         ...task,
  //         task:
  //       }
  //     }
  //   }))

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <InputBox
          value={newTask}
          onChange={updateTask}
          onKeyDown={handleKeyDown}
        />
        <br />
        <button
          onClick={taskadding}
          style={{
            marginLeft: "10px",
          }}
        >
          Add
        </button>
      </div>
      <h2>Tasks ToDo</h2>
      <ul style={{ padding: "0" }}>
        {taskAdded.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 0",
              listStyleType: "inherit",
            }}
          >
            {todo.task}&nbsp;&nbsp;&nbsp;
            <button
              onClick={() => deletingTask(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={deleteAll}>Delete All</button>
    </>
  );
}
