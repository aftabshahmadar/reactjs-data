import { useState } from 'react';

function TodoApp() {
  // State to store the list of todos and the current input value
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Handle adding a new todo
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput(""); // Clear the input field after adding
    }
  };

  // Handle deleting a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-5">Simple Todo List App</h1>

      <div className="mb-5">
        {/* Input field to type new todo */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded mr-2"
          placeholder="Enter a new task"
        />
        {/* Button to add todo */}
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      {/* Render the list of todos */}
      <ul className="bg-white p-4 rounded shadow-lg w-64">
        {todos.length === 0 ? (
          <p className="text-gray-500">No items available</p>
        ) : (
          todos.map((todo, index) => (
            <li
              key={index}
              className="border-b py-2 flex justify-between items-center"
            >
              {todo}
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 font-bold"
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoApp;
