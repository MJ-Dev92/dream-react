import React from "react";
import { useState } from "react";

export default function Header() {
  const [checked, setChecked] = useState("true");
  return (
    <div className="header">
      <span className="list">All</span>
      <span className="list">Active</span>
      <span className="list">Completed</span>
    </div>
  );
}
