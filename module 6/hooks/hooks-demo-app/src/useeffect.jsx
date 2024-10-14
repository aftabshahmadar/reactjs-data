import React,{useEffect, useState} from 'react'

export default function Useeffect() {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`the value of count is ${count}`)
    
         return () => {
            console.log(`the count is updating...`)
         }
    },[count])
  return (
    <div>
        <h1>useEffect example.</h1>
        <p>Count : {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}
