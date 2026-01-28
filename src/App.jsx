
import { useState ,useMemo} from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0); 
  const[input,setInput]=useState(0);


  function expensivetTask(num){
    console.log("Expensive task running");
    for(let i=0;i<=1e9;i++){};
    return num*2;
  }
  // let doublevalue= expensivetTask(input);
  let doublevalue=useMemo(() => expensivetTask(input), [input]);

  return (
    <>
    <div>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <div>Count:{count}</div>
        <input type="number"  value={input} onChange={(e)=>{setInput(e.target.value)}} />
      <div>Double: {doublevalue}</div>
      
      
      
      </div>
    
      
    </>
  )
}

export default App
