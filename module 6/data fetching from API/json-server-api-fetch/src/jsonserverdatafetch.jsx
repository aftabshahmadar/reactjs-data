import React, { useEffect, useState } from 'react'

export default function Jsonserverdatafetch() {

    const[user,setuser]=useState([]);
    useEffect(()=>{
      
         fetch(`http://localhost:5000/users`)
         .then((res)=>{
           return res.json();
         })
         .then((data)=>{
            setuser(data);
         })
    },[user])
  return (
       <>
       <h1 className='heading'>The list of the users fetched from an API.</h1>
       {user && user.map((item)=>{

           return (
            <>
                <div className='Users'>
                   <p><b>User ID :</b> {item.id}</p>
                   <p><b>Name of the user :</b> {item.name}</p>
                   <p><b>Age of the user :</b> {item.age}</p>
                   <p><b>Address of the user :</b> {item.address}</p>
                </div>
            </>
           )

       })}
       </>
  )
}
