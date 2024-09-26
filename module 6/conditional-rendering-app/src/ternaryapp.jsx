import React from 'react'

export default function Ternaryapp() {
    const age = 10;
    const chk=age>=18 ? <h1>I am eligible vor voting</h1> : <h1>I am not eligible vor voting</h1>; 
  return (
    <div>
        <h1>{chk}</h1>
    </div>
  )
}
