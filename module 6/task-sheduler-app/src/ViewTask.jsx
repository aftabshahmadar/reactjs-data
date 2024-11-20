import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

export default function ViewTask() {
  const [tasks, setTasks] = useState([]); // Initialize state to store tasks

  // Use useEffect to fetch tasks when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8000/tasks') // Fetching tasks from API
      .then((response) => {
        setTasks(response.data); // Set the fetched tasks to state
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <Container className='mt-5 p-2 border-rounded shadow'>
        <h1 className='fs-xl fs-4'>Task list <button type='button' className='border border-0 bg-light float-end'>Total tasks:<span className='badge badge-sm bg-dark'>0</span></button></h1>
      <table className='table table-responsive'>
        <thead>
          <tr className='text-center'>
            <th className='text-center'>Task Name</th>
            <th className='text-center'>Task Date</th>
            <th>Assigned To</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((item, index) => (
              <tr key={index}>
                <td className='text-center'>{item.taskname}</td>
                <td className='text-center'>{item.taskdate}</td>
                <td className='text-center'>{item.asignto}</td>
                <td><button className='btn btn-sm btn-danger text-white bg-danger'><span className='bi bi-trash'></span></button></td>
                <td><button className='btn btn-sm btn-success text-white bg-success '><span className='bi bi-pencil'></span></button></td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No tasks found</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}
