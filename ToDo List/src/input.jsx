import { useState } from "react";
export default function InputBox() {
  let [inputValue, setinputValue] = useState("");
  function newTodo(event) {
    setinputValue(event.target.value);
    console.log(event.target.value);
  }
  return (
    <input
      type="text"
      placeholder="Enter the Task to add"
      value={inputValue}
      onChange={newTodo}
    />
  );
}
