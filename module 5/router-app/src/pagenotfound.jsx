import React from 'react';

export default function Pagenotfound (){
    return (
        <>
         <div className='container flex flex-row gap-10 mt-60'>
            <h1 className='text-2xl font-bold bg-black p-5 text-white rounded hover:scale-110 duration-300 '>Oops! <span className='text-red-500'>page not found</span> </h1>
            <p className='text-2xl font-bold bg-white border-black p-5 text-red-500crounded'>404 ERROR!</p>
            </div>
        </>
    )
}