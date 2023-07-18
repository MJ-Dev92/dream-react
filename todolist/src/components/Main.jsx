import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Main() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);
  return (
    <div className="main">
      <span className="main-wrap">
        <div className="main-wraps">
          <input type="checkbox" value={checked} onChange={handleChange} />
          {checked ? (
            <p className="text" style={{ textDecoration: "underline" }}>
              장보기
            </p>
          ) : (
            <p className="text">장보기</p>
          )}
        </div>
        <FaRegTrashAlt className="icons" color="white" />
      </span>
      <span className="main-wrap">
        <div className="main-wraps">
          <input type="checkbox" value={checked} onChange={handleChange} />
          {checked ? (
            <p className="text" style={{ textDecoration: "underline" }}>
              공부 하기
            </p>
          ) : (
            <p className="text">공부 하기</p>
          )}
        </div>
        <FaRegTrashAlt className="icons" color="white" />
      </span>
    </div>
  );
}
