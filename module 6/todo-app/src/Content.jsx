import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { Container } from 'react-bootstrap'
import FlashMessage from 'react-flash-message'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




export default function Content() {
  const [data, setdata] = useState([]);
  // displaying task
  useEffect(() => {
    axios.get(`http://localhost:3000/tasks`).then((response) => {
      setdata(response.data);


    }, [data]);
  })
  // destructering for flash
  const [flash, setflash] = useState(false)
  // add task via form
  const taskname = useRef("");
  const taskdate = useRef("");
  const priority = useRef("");
  const navigate = useNavigate();
  // add task via axios.post()
  const addtask = (e) => {
    e.preventDefault();
    var insert = {
      taskname: taskname.current.value,
      taskdate: taskdate.current.value,
      priority: priority.current.value
    }
    // adding data in api

    axios.post(`http://localhost:3000/tasks`, insert).then(() => {
      // pass flash messege
      setflash(true);
    });
    navigate('/');
    e.target.reset();
  }
  return (
    <div>
      <Container className='mt-4 w-50 mx-auto'>
        {/* add task */}
        <h1 className='fs-4'>Add tasks here</h1>
        {flash && (<FlashMessage duration={4000}>
          <div className='alert alert-success'>
            <strong>Your task has been added.</strong>
          </div>
        </FlashMessage>)}
        <form onSubmit={addtask}>
          <div className='input-group mb-3'>
            <span className="input-group-text bi bi-pencil" id="basic-addon1"></span>
            <input type='text' ref={taskname} className='form-control' placeholder='Task name....' required />
          </div>

          <div className='input-group mb-3'>
            <span className="input-group-text bi bi-calendar" id="basic-addon1"></span>
            <input type='date' ref={taskdate} className='form-control' placeholder='Date of task....' required />
          </div>

          <div className='input-group mb-3'>
            <span className="input-group-text bi bi-exclamation-circle" id="basic-addon1"></span>
            <select ref={priority} className='form-control' placeholder='Task name....'>
              <option value="-Select priority">-Select priority</option>
              <option value="High">High</option>
              <option value="Low">Low</option>
            </select>
          </div>


          <div className='input-group mb-3'>

            <button type='submit' className='btn btn-dark text-white'>Add task <span className='bi bi-send '></span></button>
          </div>
        </form>
        {/* display task */}

        <table className='table table-responsive mt-5 border fs-5' cellPadding="8" cellSpacing="8">
          {data && data.map((item) => {
            return (
              <>

                <tr>
                  <td>{item.taskname}</td>
                  <td>{item.taskdate}</td>
                  <td>{item.priority}</td>
                  <td>
                    <button className="btn btn-outline-danger mx-1">
                      <i className="bi bi-trash text-danger"></i> Delete
                    </button>
                    <button className="btn btn-outline-primary mx-1">
                      <i className="bi bi-pencil-square text-primary"></i> Edit
                    </button>
                  </td>
                </tr>

              </>
            )
          })}

        </table>
      </Container>
    </div>
  )
}
