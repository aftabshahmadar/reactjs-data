import React from 'react'
export default function Navbar()
{
    return(
        <>
           <section id='navbar' className='navbar bg-black p-3'>
            <ul className='flex-initial text-white flex ms-10 space-x-40'>
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Food menu</a></li>
                <li><a href=''>Contact Us</a></li>
                <li><a href=''>Read more</a></li>
                <li><a href=''>Book tables</a></li>
                <li><a href=''>Creat acc.</a></li>
            </ul>
           </section>
        </>
    )
}