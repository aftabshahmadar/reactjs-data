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
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 drop-shadow-lg">Simple Todo List App</h1>

      <div className="flex items-center mb-6">
        {/* Input field to type new todo */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-400 p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          placeholder="Enter a new task"
        />
        {/* Button to add todo */}
        <button 
          onClick={addTodo} 
          className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          Add
        </button>
      </div>

      {/* Render the list of todos */}
      <ul className="bg-white p-6 rounded-lg shadow-xl w-80">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks available</p>
        ) : (
          todos.map((todo, index) => (
            <li
              key={index}
              className="border-b last:border-none py-3 flex justify-between items-center text-gray-700 hover:bg-gray-100 transition duration-200"
            >
              {todo}
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 font-bold hover:text-red-700 transition duration-200"
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
