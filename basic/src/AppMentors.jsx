import React, { useState, useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentors() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  };
  const handleAdd = () => {
    const name = prompt(`추가하고 싶은 이름이 뭔가요?`);
    const title = prompt(`추가하는 사람의 타이틀을 적어 주세요`);
    dispatch({ type: "added", name, title });
  };
  const handleDelete = () => {
    const name = prompt(`누구의 이름을 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", name });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>

      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 이름 추가하기</button>
      <button onClick={handleDelete}>멘토 이름 삭제하기</button>
    </div>
  );
}
const initialPerson = {
  name: "민재",
  title: "개발자",
  mentors: [
    {
      name: "엘리",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
