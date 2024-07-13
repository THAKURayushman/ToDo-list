import InputBox from "./input";
import { useState } from "react";

export default function TaskAdding() {
  let [newTask, setnewTask] = useState("");

  function updateTask(event) {
    setnewTask(event.target.value);
  }

  let [taskAdded, settaskAdded] = useState([]);

  function taskadding() {
    if (newTask !== "" && newTask !== taskAdded[taskAdded.length - 1]) {
      settaskAdded([...taskAdded, newTask]);
      setnewTask("");
    } else {
      alert("task added enter next task to add");
    }
  }
  return (
    <>
      <InputBox value={newTask} onChange={updateTask} />
      <br />
      <button onClick={taskadding}>Add</button>
    </>
  );
}
