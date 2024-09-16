import { useState } from 'react';

function App() {
  // Define the list of items using React state
  const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Date", "Elderberry"]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-5">Simple List View</h1>
      <ul className="bg-white p-4 rounded shadow-lg">
        {/* Map through the list to render each item */}
        {items.map((item, index) => (
          <li key={index} className="border-b py-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
