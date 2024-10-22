import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import axios from 'axios';

// axios: a library that used to call API and perform CRUD on it.

const Taskinput = () => {

  const[task,setTasks]=useState();

  useEffect(()=>{
    
    setTasks(()=>{
      //calling api
      axios.get(`http://localhost:50000/tasks`).then((response)=>{
            setTasks(response.data);
      })


    })

  },[task])

  // all data stored in variable 

    const taskname=useRef("");
    const taskdate=useRef("");
    const asignto=useRef("");
    // const navigate=useNavigate();

    // add function for form handeling

    const addTaskhandeler=(e)=>
    {
      e.preventDefault();
      var data=
      {
        taskname : taskname.current.value,
        taskdate : taskdate.current.value,
        asignto : asignto.current.value
      }

      // calling the API 
      axios.post(`http://localhost:50000/tasks`,data).then(()=>{
        Swal.fire({
          title:"good job!",
          text:"New task added",
          icon:"success"

          
        })
        // navigate('/ViewTask')
        e.target.reset()
      })

    }

  return (
    <div>
      <Container className='mt-5 p-5 w-50 mx-auto'>
        
        <div className='p-5 border-rounded shadow'>
        <h1 className='fs-xl fs-4'>Add new task here <button type='button' className='border border-0 bg-light float-end'>Total tasks:<span className='badge badge-sm bg-dark'>0</span></button></h1>
        <form onSubmit={addTaskhandeler}>
          <input type='text' ref={taskname} placeholder='Task' className='form-control mt-2' required /> <br />
          <input type='date' ref={taskdate} className='form-control mt-2' required /> <br />
          <select ref={asignto} placeholder='Task' className='form-control mt-2'>
               <option value="Aftab">Aftab</option>
               <option value="Mahir">Mahir</option>
               <option value="Arshad">Arshad</option>
               <option value="Alfez">Alfez</option>
               <option value="Ayan">Ayan</option>
               <option value="Mustafa">Mustafa</option>
          </select> <br />
          <button className='btn btn-dark text-white d-flex align-items-center'>
      <i className="bi bi-send-fill me-2"></i> {/* Bootstrap "send" icon */}
      Add task
    </button>
        </form>
        </div>
      </Container>
    </div>
  );
}

export default Taskinput;
