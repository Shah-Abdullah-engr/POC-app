import React from 'react'

const ChildComponent =(props) => {
    console.log("Child Component got rerendered again!!")
  return (
    <div>
        <button>
            {props.buttonName};
        </button>
    </div>
  )
}



export default ChildComponent