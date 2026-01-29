import React, { useCallback, useMemo, useState } from 'react'
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

 
  


  //for count state change!!!
  const handleClick=()=>{
   console.log("Button Clicked!"); 
  setCount(count + 1);
  }
  //for count state change!!!




    //for using useMemo()hook
  const calculate=()=>{
    console.log("calculating!!!");
    return 4*2;
  }
  // const doubleValue=calculate();
  const doubleValue=useMemo(() => calculate, [])
    //for using useMemo()hook
  
  
  
  
  
  
  //This one is for useCallback hook!!!! 
  const value=useCallback(
    ()=>{
      return count*2;
    },[]
  )
  //This one is for useCallback hook!!!!
 
 
 
 
 
 
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
   <ChildComponent handleClick={value}/>



    {/* <input type='number'
         value={input}
         onChange={(e)=>setInput(e.target.value)}
       />
        <div>double : {Doublevalue}</div> */}
        
    </>
  )
}
export default App