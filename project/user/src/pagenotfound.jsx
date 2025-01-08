import React from 'react';

export default function Pagenotfound() {
  return (
    <div className='container'
    style={{marginTop:"12%", marginBottom:"9%"}}>
      <h1 className='text-5xl font-bold text-white ms-80'>
        Oops! <span className='text-red-500'>page not found</span>
      </h1>
      <p className='text-2xl font-bold text-red-500 text-left ms-80'>
        404 ERROR!
      </p>
    </div>
  );
}
