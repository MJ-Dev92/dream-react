import React, { memo, useCallback, useMemo, useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentorsButton() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`추가하고 싶은 이름이 뭔가요?`);
    const title = prompt(`추가하는 사람의 타이틀을 적어 주세요`);
    dispatch({ type: "added", name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`누구의 이름을 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", name });
  }, []);

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

      <Button text="멘토 이름 바꾸기" onClick={handleUpdate} />
      <Button text="삭제하기" onClick={handleDelete} />
      <Button text="멘토 추가하기" onClick={handleAdd} />
    </div>
  );
}
const Button = memo(({ text, onClick }) => {
  console.log("Button", text, "re-rendering");
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: "20px",
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log("log");
  }
  return 10;
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
