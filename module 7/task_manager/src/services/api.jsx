import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Assuming your JSON server is running on this port

// Function to fetch tasks for a specific user by email
export const fetchTasks = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/users?email=${email}`);
    return response.data[0]?.tasks || []; // Return tasks of the first user, if any
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};
