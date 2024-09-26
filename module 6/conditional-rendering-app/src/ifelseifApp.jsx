import React from 'react'

export default function IfelseifApp() {
    const a = 110;
    const b = 20;
    const c = 30;
    if(a >= b && a >= c)
    {
        return <h1>a is the larget number among all. </h1>
    }
    else if(b >= a && b >= c)
    {
        return <h1>b is the largest number among all.</h1>
    }
    else{
        return <h1>c is the largest number among all.</h1>
    }
  return (
    <div></div>
  )
}
