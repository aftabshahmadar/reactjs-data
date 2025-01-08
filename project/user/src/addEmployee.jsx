import React, { useState } from 'react';
import Swal from "sweetalert2";


export default function AddEmployee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation: Check if all fields are filled
    if (!name || !email || !position) {
      setError('All fields are required!');
      return;
    }

    // Reset error message and handle form submission
    setError('');
    console.log({ name, email, position });

    // Here you can add further logic (e.g., sending data to a server)

    
   // passing a sweet alert after submitting the form 
   Swal.fire({
    title: "Good job!",
    text: "Thanks for adding employees Data!",
    icon: "success"
  });
  
  setName('');    
  setEmail('');     
  setPosition('')
  };


  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Add New Employee</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            input
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            input
          />
        </div>

        <div>
          <label>Position:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            input
          />
        </div>

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}
