import React, { useEffect, useState } from 'react'

export default function FetchApidatas () {
    const[photos,setphoto]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setphoto(data);
        });
    },[])
  return (
    <div>
    <h1>Example of data fetching from a fake API.</h1>
       { photos && photos.map((item)=>{
            return(
                <>
                   <div className='app'>
                    <img src={item.url} alt='phot'/>
                   </div> 
                </>
            )
        }) }
    </div>
  )
}
