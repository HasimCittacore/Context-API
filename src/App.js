import React,{useState} from "react";
import "./style.css";
import Counter from './Counter';
import { Context } from './Context';
export default function App() {
  const [count,setCount] = useState(5)
  const handleIncre=()=>{
    setCount(count+1)
  }

  const handleDecre=()=>{
    setCount(count-1)
  }

  const handleReset=()=>{
    setCount(5)
  }
  return (
    <div>
      <h3>App Component(Provider)</h3>
      <p>Count:{count}</p>
      <button onClick={handleIncre}>Increment</button> &nbsp;
      <button onClick={handleDecre}>Decrement</button>  &nbsp;
      <button onClick={handleReset}>Reset</button>
 
     <Context.Provider
       value={{
       countFromApp : count,
       handleDecreFromApp : handleDecre,
       handleIncreFromApp : handleIncre,
       handleResetFromApp : handleReset
     }}
     
     >
      <Counter/>
      </Context.Provider>
    </div>
  );
}
