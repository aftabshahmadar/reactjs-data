// src/App.jsx

import { useState } from 'react';

function App() {
  // Declare a state variable to keep track of the counter
  const [count, setCount] = useState(0);

  // Functions to increase and decrease the count
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-5">Simple Counter App</h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={decreaseCount}
        >
          -
        </button>
        <span className="text-3xl">{count}</span>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={increaseCount}
        >
          +
        </button>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={resetCount}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
