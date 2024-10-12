import { useState } from 'react';
import './Style.css'; // Import the CSS file

function App() {
  // Declare a state variable to keep track of the counter
  const [count, setCount] = useState(0);

  // Functions to increase and decrease the count
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div>
      <h1>Simple Counter App</h1>
      <div className="counter-container">
        <button onClick={decreaseCount}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
      </div>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;
