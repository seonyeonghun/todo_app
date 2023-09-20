import { useState } from "react"; // 1) useState 훅 호출
import { FaTrashCan } from "react-icons/fa6";
import "./App.css";

function App() {
  const title = "TO-DO APP";
  const subtitle = "오늘 뭐하지 앱";
  const [todo, setTodo] = useState(""); // 할일 항목을 기록하는 state
  const [todos, setTodos] = useState([]); // 할일들을 기록하는 state

  function handleChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault(); // 페이지 새로고침 금지
    setTodo(""); // 할일 초기화
    setTodos((todos) => [todo, ...todos]); // 화살표 함수, 나머지 연산자
  }
  function handleRemove(id) {
    setTodos(todos.filter((todo, i) => i !== id));
  }
  return (
    <>
      <header className="site-header text-center py-1">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
      <form id="todoForm" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="d-none">할일</legend>
          <div className="d-flex justify-content-center">
            <label>할일</label>
            <input
              type="text"
              id="todo_input"
              value={todo}
              onChange={handleChange}
            />
            <button type="submit" className="ml-1">
              등록
            </button>
          </div>
        </fieldset>
      </form>
      <hr />
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {i}번째 할일 : {todo}{" "}
            <FaTrashCan onClick={() => handleRemove(i)}>삭제</FaTrashCan>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
