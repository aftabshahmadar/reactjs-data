import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <section id='navbar' className='mt-1 navbar bg-black p-3'>
      <ul className='container flex flex-col sm:flex-row text-white space-y-4 sm:space-y-0 sm:space-x-10 justify-between'>
        <li>
          <Link 
            to='/' 
            className='hover:text-gray-400 duration-300'
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to='/about' 
            className='hover:text-gray-400 duration-300'
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to='/learn-more' 
            className='hover:text-gray-400 duration-300'
          >
            Learn More
          </Link>
        </li>
        <li>
          <Link 
            to='/contact' 
            className='hover:text-gray-400 duration-300'
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </section>
  );
}
