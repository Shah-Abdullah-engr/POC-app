import React, { useMemo, useState } from 'react'
import "./App.css";
import ChildComponent from './components/ChildComponent';
  // const expensiveTask=(num,c)=>{
  //   console.log("Expensive task running",c);
  //   for(let i=0;i<=1e9;i++){}
  //   return num*2;
  // }

const App = () => {
  console.log('app rerendered');
  const [count,setCount]=useState(0);
  // const [input,setInput]=useState(0);

 
  
  const handleClick=()=>{
   console.log("Button Clicked!"); 
  setCount(count + 1);
  }
  // let Doublevalue=useMemo(() => expensiveTask(input), [input])
      return (
   <> 
   <div>
      Count:{count}
    </div>
    <br /><br />
    <button onClick={handleClick}>
      Increment
    </button>
    <br /><br />
        {/* <input type='number'
         value={input}
         onChange={(e)=>setInput(e.target.value)}
       />
        <div>double : {Doublevalue}</div> */}
        
          <ChildComponent buttonName="Clickme"/>
        
    </>
  )
}
export default App