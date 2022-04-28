import React,{useContext} from "react";
import {Context} from './Context';
import Counter2 from './Counter2'
export default function Counter(){
  const valuesfromApp = useContext(Context)
  return(
    <>
    <h3>Counter Component(Consumer)</h3>
      <p>Count:{valuesfromApp.countFromApp} </p>
      <button onClick={valuesfromApp.handleIncreFromApp} >Increment</button>  &nbsp; 
      <button onClick={valuesfromApp.handleDecreFromApp}>Decrement</button>  &nbsp;
      <button onClick={valuesfromApp.handleResetFromApp}>Reset</button>
      <Counter2/>
    </>
  )
}