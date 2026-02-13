import React, { useState, useCallback } from "react";

export default function Bai4() {
  const [todos, setTodos] = useState(() =>
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      text: "Todo " + i,
      completed: false,
    }))
  );

  const [text, setText] = useState("");

  //  useCallback để giữ reference
  // lọc các giá trị khác id muốn xóa => xóa id mình yêu caafu
  const onDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);
    setText("");
  };

  return (
    <div>
      <h2>Todo Performance</h2>

      {/* TodoInput */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập todo..."
      />
      <button onClick={addTodo}>Add</button>

      {/* TodoList */}
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}


// React.memo để tránh re-render
const TodoItem = React.memo(function TodoItem({
  todo,
  onDelete,
  onToggle,
}) {
  console.log("render item", todo.id);

  return (
    <div style={{ margin: "4px" }}>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </div>
  );
});
