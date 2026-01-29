import React from 'react'

const ChildComponent =() => {
    console.log("Child Component got rerendered again!!")
  return (
    <div>
       Click me 
    </div>
  )
}



export default React.memo(ChildComponent)