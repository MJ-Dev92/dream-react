import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  let [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p className="number">
        {count}
        <span className="total">/{total}</span>
      </p>

      <button
        className="btn"
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
