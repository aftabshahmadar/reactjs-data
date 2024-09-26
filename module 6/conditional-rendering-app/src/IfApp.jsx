import React from 'react'

export default function App() {
  const age = 19;
  if(age >= 18){
    return <h1>you are eligible for the voting.</h1>
  }
  else{
    return <h1>you are not eligible for voting yet.</h1>
  }
  return (
    <div></div>
  )
}
