import React, { useState } from "react";

export default function AddTodo({ onAdd, todos }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    // const id = String(+todos[todos.length - 1].id + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({
      id: String(+todos[todos.length - 1].id + 1),
      text,
      status: "active",
    });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
