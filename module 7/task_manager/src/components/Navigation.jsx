import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext';
export default function Navigation() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
  try {
  await logOut();
  navigate("/");
  } catch (error) {
  console.log(error.message);
  }
  };
  return (
    <div className='container-fluid p-5 bg-white navigation'>
    <h1 className='ms-2'>Hi, <span className='add-task-anim'>{user && user.email}</span></h1>
    <p className='ms-2 text-dark'>Here your Tasks</p>
    {/* navigations */}
    <nav className='w-75 mx-auto navbar-expand-md bg-dark p-3 rounded-5'>
      <ul className='nav-links'>
        <li><Link to=""><span className='bi bi-pencil fs-2 text-danger'></span></Link></li>
        <li><Link to=""><span className='bi bi-check-circle fs-2 text-danger'></span></Link></li>
        <li><button type='button' onClick={handleLogout}><span className='bi bi-power fs-2 text-danger'></span></button></li>
      </ul>
    </nav>
    </div>
  )
}
