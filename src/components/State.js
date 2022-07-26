import React, { useState } from 'react';

/* 
- Destructuring state by importing
- Only can use hooks inside of function components
- Hooks can only be called at the top-level (Not inside loops, conditions, nested functions) 
- React relies on order in which hooks are called - they must execute in the same order - if check, first hook may and may not run, order different
*/

const State = () => {
  // if (true) {
  //   useState()
  // }
  // useState()
  // useState()
  // useState()

  // useState returns an array with 2 values
  // First value is the current state
  // Second value is a function that allows you to update your state
  // Syntax is convention established by the community
  const [count, setCount] = useState(2); // pass in default state

  const decrementCount = () => {
    // setCount(count - 1); // 4 - 1
    // setCount(count - 1); // 4 - 1 , overridding each other, count is just the value when we first render the function
    // Everytime we call the update function, it will rerender the component with the new value for count
    setCount((prevCount) => prevCount - 1); // pass in a function and function takes in previous state value
    setCount((prevCount) => prevCount - 1); // first time is 4, second time 3 gets passed in
    // Modifying state, when you are using the previous value to create a new value, you need to pass in a function version of setting state
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div>UseState example</div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default State;
