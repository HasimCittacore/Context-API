import React from 'react';
import {Context} from './Context'

class Counter3 extends React.Component{
  static contextType= Context
  constructor(){
    super();
  }
  render(){
    return(
      <>
      <h3>Counter3 Component(Consumer)</h3>
      <p>Count:{this.context.countFromApp}</p>
      <button onClick={this.context.handleIncreFromApp}>Increment</button> &nbsp;
      <button onClick={this.context.handleDecreFromApp}>Decrement</button>  &nbsp;
      <button onClick={this.context.handleResetFromApp}>Reset</button>
      </>
    )
  }
}
export default Counter3;
