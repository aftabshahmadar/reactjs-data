// import React, { useRef, useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container } from 'react-bootstrap';
// import Swal from 'sweetalert2';
// import emailjs from '@emailjs/browser';
// import { useNavigate } from 'react-router-dom';


// const TaskInput = () => {

//   const serviceId="";
//   const templateId="";
//   const publicId="";
  
//   const taskname=useRef("");
//   const taskdate=useRef("");
//   const asignto=useRef("");

//   const navigate=useNavigate();


//   const addtaskdata=(e)=> {
//     e.preventDefault();
//     emailjs.sendForm(serviceId, templateId, e.target, publicId)
//     var insert ={
//        taskname:taskname.current.value,
//        taskdate:taskdate.current.value,
//        assignto:assignto.current.value

//     }
//     axios.post(`http://localhost:8000/tasks`,insert).then(()=>{

//       Swal.fire('Thanks for adding new task, our team will give caution about it soon.')
//       navigate('/')
//     });
//     e.target.reset();
//   }

//   // const [tasks, setTasks] = useState([]); // State to manage task list
//   // const [loader, setLoader] = useState(true); // Loader state

//   // // Lazy loader
//   //  useEffect(() => {
//   //    const timer = setTimeout(() => setLoader(false), 3000);
//   //    return () => clearTimeout(timer); // Cleanup on unmount
//   //  }, []);

//   // // Fetch tasks from API
//   // useEffect(() => {
//   //   axios.get(`http://localhost:8000/tasks`)
//   //     .then((response) => setTasks(response.data))
//   //     .catch((error) => console.error('Error fetching tasks:', error));
//   // }, []);

//   // // Refs to store input data
//   // const taskname = useRef("");
//   // const taskdate = useRef("");
//   // const asignto = useRef("");

//   // const addTaskHandler = (e) => {



//   //   e.preventDefault();
//   //   const data = {
//   //     taskname: taskname.current.value,
//   //     taskdate: date.current.value,
//   //     asignto: asignto.current.value,
//   //   };

//   //   axios.post(`http://localhost:8000/tasks`, data)
//   //     .then(() => {
//   //       Swal.fire({
//   //         title: "Success!",
//   //         text: "Task added successfully.",
//   //         icon: "success",
//   //       });
//   //       e.target.reset(); // Reset the form
//   //       axios.get(`http://localhost:8000/tasks`).then((response) => setTasks(response.data)); // Refresh tasks
//   //     })
//   //     .catch((error) => console.error('Error adding task:', error));
//   // };

   
//   //  loader ? (
//   //   <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//   //   <div className="text-center" aria-busy="true" aria-live="polite">
//   //     <div className="spinner-border" role="status">
//   //       <span className="visually-hidden">Loading...</span>
//   //     </div>
//   //   </div>
//   // </div>
  
//   // ) : 
//   return (
//     <div>
//       <Container className="mt-5 p-5 w-50 mx-auto">
//         <div className="p-5 border-rounded shadow">
//           <h1 className="fs-xl fs-4">
//             Add New Task
//             {/* <button type="button" className="border border-0 bg-light float-end">
//               Total Tasks: <span className="badge badge-sm bg-dark">{tasks?.length || 0}</span>
//             </button> */}
//           </h1>
//           <form onSubmit={addtaskdata}>
//             <input
//               type="text"
//               ref={taskname}
//               name="name"
//               placeholder="Task Name"
//               className="form-control mt-2"
//               required
//             />
//             <input
//               type="date"
//               ref={taskdate}
//               name="date"
//               className="form-control mt-2"
//               required
//             />
//             <select ref={asignto} name="assignto" className="form-control mt-2" required>
//               <option value="Aftab">Aftab</option>
//               <option value="Mahir">Mahir</option>
//               <option value="Arshad">Arshad</option>
//               <option value="Alfez">Alfez</option>
//               <option value="Ayan">Ayan</option>
//               <option value="Mustafa">Mustafa</option>
//             </select>
//             <button className="btn btn-dark text-white d-flex align-items-center mt-3">
//               <i className="bi bi-send-fill me-2"></i> Add Task
//             </button>
//           </form>
//         </div>
//       </Container>
//     </div>
//   );
// }
// export default TaskInput


import React, { useRef } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const TaskInput = () => {
  // EmailJS configuration
  const serviceId = "";
  const templateId = "";
  const publicId = "";

  // Form references
  const taskname = useRef("");
  const taskdate = useRef("");
  const asignto = useRef("");

  const navigate = useNavigate();

  // Function to handle task addition
  const addTaskData = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
  
    try {
      const taskData = {
        taskname: taskname.current.value,
        taskdate: taskdate.current.value,
        assignto: asignto.current.value,
      };
  
      console.log("Task Data:", taskData); // Debugging log
  
      // Optional: EmailJS Integration
      const emailResponse = await emailjs.sendForm(
        serviceId,
        templateId,
        e.target,
        publicId
      );
      console.log("Email Response:", emailResponse); // Debugging log
  
      // Post to API
      const apiResponse = await axios.post(
        "http://localhost:8000/tasks",
        taskData
      );
      console.log("API Response:", apiResponse); // Debugging log
  
      // Success alert
      Swal.fire({
        title: "Task Added Successfully!",
        text: "Your task has been added to the system.",
        icon: "success",
      });
  
      e.target.reset(); // Reset the form
      navigate("/"); // Redirect to home
    } catch (error) {
      console.error("Error adding task:", error); // Debugging log
      Swal.fire({
        title: "Error!",
        text: "Failed to add task. Please try again.",
        icon: "error",
      });
    }
  };
  

  return (
    <div>
      <Container className="mt-5 p-5 w-50 mx-auto">
        <div className="p-5 border-rounded shadow">
          <h1 className="fs-xl fs-4">Add New Task</h1>
          <form onSubmit={addTaskData}>
            <input
              type="text"
              ref={taskname}
              name="taskname"
              placeholder="Task Name"
              className="form-control mt-2"
              required
            />
            <input
              type="date"
              ref={taskdate}
              name="taskdate"
              className="form-control mt-2"
              required
            />
            <select
              ref={asignto}
              name="assignto"
              className="form-control mt-2"
              required
            >
              <option value="Aftab">Aftab</option>
              <option value="Mahir">Mahir</option>
              <option value="Arshad">Arshad</option>
              <option value="Alfez">Alfez</option>
              <option value="Ayan">Ayan</option>
              <option value="Mustafa">Mustafa</option>
            </select>
            <button
              className="btn btn-dark text-white d-flex align-items-center mt-3"
            >
              <i className="bi bi-send-fill me-2"></i> Add Task
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default TaskInput;
