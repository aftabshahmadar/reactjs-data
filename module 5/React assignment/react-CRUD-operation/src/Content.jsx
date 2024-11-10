import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { Container } from 'react-bootstrap'
import FlashMessage from 'react-flash-message'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Content() {
  const [data, setdata] = useState([]);
  const [flash, setflash] = useState(false);
  const taskname = useRef("");
  const taskdate = useRef("");
  // const priority = useRef("");
  const navigate = useNavigate();

  // Fetch tasks on component mount
  useEffect(() => {
    axios.get(`http://localhost:3000/tasks`).then((response) => {
      setdata(response.data);
    });
  }, []); // Add empty dependency array to run only once on mount

  // Add task function
  const addtask = (e) => {
    e.preventDefault();
    const insert = {
      taskname: taskname.current.value,
      taskdate: taskdate.current.value,
      priority: priority.current.value
    };

    axios.post(`http://localhost:3000/tasks`, insert).then(() => {
      setflash(true);
      setTimeout(() => setflash(false), 4000); // Automatically hide flash message after 4 seconds

      // Re-fetch data to show new task
      axios.get(`http://localhost:3000/tasks`).then((response) => {
        setdata(response.data);
      });
    });

    e.target.reset();
  };        

  // Delete task function
  const deleteTask = (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`).then(() => {
      setdata(data.filter(task => task.id !== id));
    });
  };

  return (
    <div>
      <Container className='mt-4 w-50 mx-auto'>
        <h1 className='fs-4'>Add tasks here</h1>
        {flash && (
          <FlashMessage duration={4000}>
            <div className='alert alert-success'>
              <strong>Your task has been added.</strong>
            </div>
          </FlashMessage>
        )} 
        <form onSubmit={addtask}>
          <div className='input-group mb-3'>
            <span className="input-group-text bi bi-pencil" id="basic-addon1"></span>
            <input type='text' ref={taskname} className='form-control' placeholder='Task name....' required />
          </div>
          <div className='input-group mb-3'>
            <span className="input-group-text bi bi-calendar" id="basic-addon1"></span>
            <input type='date' ref={taskdate} className='form-control' required />
          </div>
          {/* <div className='input-group mb-3'>
            <span className="input-group-text bi bi-exclamation-circle" id="basic-addon1"></span>
            <select ref={priority} className='form-control'>
              <option value="-Select priority">-Select priority</option>
              <option value="High">High</option>

              <option value="Low">Low</option>
            </select>
          </div> */}
          <div className='input-group mb-3'>
            <button type='submit' className='btn btn-dark text-white'>Add task <span className='bi bi-send'></span></button>
          </div>
        </form>

        {/* Display tasks */}
        <table className='table table-responsive mt-5 border fs-5' cellPadding="8" cellSpacing="8">
          {data && data.map((item) => (
            <tr key={item.id}>
              <td>{item.taskname}</td>
              <td>{item.taskdate}</td>
              <td>{item.priority}</td>
              <td>
                <button className="btn btn-danger mx-1" onClick={() => deleteTask(item.id)}>
                  <i className="bi bi-trash text-danger"></i> Delete
                </button>
                <button className="btn btn-primary mx-1">
                  <i className="bi bi-pencil-square text-primary"></i> Edit
                </button>
              </td>
            </tr>
          ))}
        </table>
      </Container>
    </div>
  )
}
