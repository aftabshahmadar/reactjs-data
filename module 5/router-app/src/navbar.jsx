import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <section id='navbar' className='mt-1 navbar bg-black p-3'>
      <ul className='container flex-initial text-white flex space-x-40 justify-between'>
        <li>
          <Link 
            to='/' 
            className='hover:text-gray-400 duration-300'  // Add hover effect with transition
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to='/about' 
            className='hover:text-gray-400 duration-300'  // Add hover effect with transition
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to='/learn-more' 
            className='hover:text-gray-400 duration-300'  // Add hover effect with transition
          >
            Learn More
          </Link>
        </li>
       <li>
          <Link 
            to='/contact' 
            className='hover:text-gray-400 duration-300'  // Add hover effect with transition
          >
            Contact Us
          </Link>
        </li>
       
      </ul>
      <Outlet />
    </section>
  );
}
