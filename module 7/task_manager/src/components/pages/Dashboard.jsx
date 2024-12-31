import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../../Context/UserAuthContext';
import pen from '../../pen.png';
import DashboardHeader from '../DashboardHeader';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { fetchTasks } from '../../services/api'; // Import the API function
import axios from 'axios'; // Import axios for sending requests

export default function Dashboard() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [assignee, setAssignee] = useState('');
  const [addedDate, setAddedDate] = useState('');
  const userEmail = user?.email;  // Dynamically use the logged-in user's email

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // Fetch tasks for the logged-in user
  useEffect(() => {
    const getUserTasks = async () => {
      const userTasks = await fetchTasks(userEmail);  // Fetch tasks based on email
      setTasks(userTasks);
    };

    if (userEmail) {
      getUserTasks();
    }
  }, [userEmail]);

  // Handle form submission to add a new task
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskTitle || !assignee || !addedDate) {
      console.log('All fields are required');
      return;
    }

    const newTask = {
      title: taskTitle,
      assignee: assignee,
      addedDate: addedDate,
    };

    try {
      // First, we fetch the current user
      const userResponse = await axios.get(`http://localhost:5000/users?email=${userEmail}`);
      const user = userResponse.data[0]; // Get the user data

      if (user) {
        // If the user exists, we add the new task to their tasks array
        const updatedUser = {
          ...user,
          tasks: [...user.tasks, newTask]  // Add the new task to the user's tasks
        };

        // Send a PATCH request to update the user's task list with the new task
        await axios.put(`http://localhost:5000/users/${user.id}`, updatedUser);
        
        // Reset form fields
        setTaskTitle('');
        setAssignee('');
        setAddedDate('');

        // Re-fetch tasks to show the updated list
        const updatedTasks = await fetchTasks(userEmail);
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <>
      <div className='task-dashboard w-50 mx-auto bg-white'>
        <DashboardHeader />
        <Navigation />

        {/* Add Task Form */}
        <div className='task-form p-5'>
          <h2 className='text-center text-white'>Add New Task</h2>
          <form onSubmit={handleSubmit} className='task-form-fields'>
            <input
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="form-input"
            />
            <input
              type="text"
              placeholder="Assignee"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="form-input"
            />
            <input
              type="date"
              value={addedDate}
              onChange={(e) => setAddedDate(e.target.value)}
              className="form-input"
            />
            <button type="submit" className="submit-btn">Add Task</button>
          </form>
        </div>

        {/* Dashboard content */}
        <div className='dashboard-content p-5'>
          <h1 className='text-center text-white'>Your Tasks</h1>
          <hr className='w-25 mx-auto border-white' />
          
          {/* Display tasks */}
          {tasks.length > 0 ? (
            <div className='row'>
              {tasks.map((task) => (
                <div key={task.id} className='col-md-5 ms-5'>
                  <div className='card'>
                    <img src={pen} className='img-fluid' alt="task" />
                    <div className='card-body bg-dark text-white'>
                      <h3 className='text-center fs-5'>{task.title}</h3>
                      <h3 className='text-center fs-6'>Assigned To: {task.assignee}</h3>
                      <h3 className='text-center fs-6'>Added Date: {task.addedDate}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-center text-white'>No tasks available</p>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
