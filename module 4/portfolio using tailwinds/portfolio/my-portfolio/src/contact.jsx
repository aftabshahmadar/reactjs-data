import React from 'react';
export default function Contact(){
    return (
        <>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
        <span className='text-md font-semibold'>Please fill out the details in the given form below to contact me.</span>
        <div className='flex flex-col items-center justify-center mt-10'>
            <form action='' className='bg-slate-200 w-96 px-8 py-6 rounded-lg '>
                <h1 className='text-xl font-semibold mb-4'>Send your details</h1>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Full name</label>
                    <input
                    className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                    id='name'
                    type='text'
                    placeholder='Enter your full name **'
                    />
                    
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Email address</label>
                    <input
                    className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                    id='name'
                    type='text'
                    placeholder='Enter your Email **'
                    />
                    
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700'>Message</label>
                    <textarea
                    className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                    id='name'
                    type='text'
                    placeholder='Enter your full name **'
                    />
                    
                </div>
                <button className='bg-black text-white rounded px-3 py-2  hover:bg-slate-700 duration-300'>Send</button>
            </form>
        </div>
        </div>
        </>
    )
} 