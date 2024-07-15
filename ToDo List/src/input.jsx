import { useState } from "react";

export default function InputBox({ inputValue, onChange, onKeyDown }) {
  return (
    <input
      type="text"
      placeholder="Enter the Task to add"
      value={inputValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}
