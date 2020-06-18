import React, { useState } from 'react';
import Headers from './Header';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    setTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
    setTodo('');
  }

  return (
    <div className="container">
      <header>
        <Headers />
        <form className="new-task" id="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            placeholder="할일을 입력하세요"
            value={todo}
            onChange={handleChange}
          />
        </form>
      </header>
      <div id="result">
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
