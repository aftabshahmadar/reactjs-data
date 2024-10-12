// src/EmployeeForm.jsx
import React, { useRef, useState } from 'react';

export default function EmployeeForm() {
  // Create refs for the input fields
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const salaryRef = useRef(null);
  const companyRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Access the values directly from refs
    const name = nameRef.current.value.trim(); // Trim to remove extra spaces
    const age = ageRef.current.value.trim();
    const salary = salaryRef.current.value.trim();
    const companyName = companyRef.current.value.trim();

    // Basic validation
    if (!name || !age || !salary || !companyName) {
      setErrorMessage('All fields are required.');
      return;
    }

    const ageNumber = parseInt(age, 10);
    const salaryNumber = parseFloat(salary);

    if (isNaN(ageNumber) || ageNumber < 0) {
      setErrorMessage('Please enter a valid age (non-negative number)');
      return;
    }
    if (isNaN(salaryNumber) || salaryNumber < 0) {
      setErrorMessage('Please enter a valid salary (non-negative number)');
      return;
    }

    // Clear error message on successful submission
    setErrorMessage('');

    // Log the submitted data
    console.log('Employee added:', { name, age: ageNumber, salary: salaryNumber, companyName });

    // Reset the form fields
    nameRef.current.value = '';
    ageRef.current.value = '';
    salaryRef.current.value = '';
    companyRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <label>
        Name:
        <input
          type="text"
          ref={nameRef}
          input
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          ref={ageRef}
          input
        />
      </label>
      <label>
        Salary:
        <input
          type="text"
          ref={salaryRef}
          input
        />
      </label>
      <label>
        Company Name:
        <input
          type="text"
          ref={companyRef}
          input
        />
      </label>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button type="submit">
        Add Employee
      </button>
    </form>
  );
}
