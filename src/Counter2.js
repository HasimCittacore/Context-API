import React from 'react';
import {Context} from './Context';
import Counter3 from './Counter3'
class Counter2 extends React.Component{
   constructor(){
     super();
   }
   render(){
     return(
       <>
       <Context.Consumer>
         {(valuesfromApp => {
           return (
       <>
        <h3>Counter Component(Consumer)</h3>
      <p>Count:{valuesfromApp.countFromApp} </p>
      <button onClick={valuesfromApp.handleIncreFromApp} >Increment</button>  &nbsp; 
      <button onClick={valuesfromApp.handleDecreFromApp}>Decrement</button>  &nbsp;
      <button onClick={valuesfromApp.handleResetFromApp}>Reset</button>

       </>
           )
      })}
       </Context.Consumer>
       <Counter3/>
       </>
     )
   }
}
export default Counter2