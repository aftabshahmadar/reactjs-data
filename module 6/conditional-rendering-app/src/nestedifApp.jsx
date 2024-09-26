import React from 'react'

export default function NestedifApp() {
    const a = 110
    const b = 10
    if(a > b){
        if(a != 0 && b !=0){
            return <h1>a is greater than b.</h1>
        }
    }
    else {
        return <h1>b is greater than a.</h1>
    }
  return (
    <div></div>
  )
}
