import React, { useState, useMemo, useEffect } from 'react';

// useMemo - memoizing - caching a value so you don't have to recompute it every single time

const slowFunction = (num) => {
  console.log('Calling slow function');
  for (let i = 0; i < 1000000000; i++) {} // Emulate a function that it very computational heavy
  return num * 2;
};

const Memo = () => {
  // Two states, one number, one boolean for toggle theme button
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // It's going to give the same output if we give the same input so we can just cache the input and output it gives us, so
  // if number don't change, we don't have to recalculate the slow function over and over again
  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  // Re-render, gets down to useMemo, sees that number is exactly the same, so won't recall

  // const themeStyles = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black',
  // };

  // If our dark variable don't change we don't re-update the themestyles, get the exact same reference as the previous time we render the app
  const themeStyles = useMemo(
    () => ({
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }),
    [dark]
  );

  // ^
  // Referential Equality - comparing two different objects in Javascript, it's going to compare their reference
  // Not equal to each other as they reference different values
  // const themeStyles2 = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black',
  // };

  useEffect(() => {
    // New theme style object being created is not the same as the old theme style
    console.log('Theme changed');
  }, [themeStyles]);

  // Toggling theme is slow also because when you update your state in React, you will re-render your entire component
  // Run the entire Memo component again from top to bottom, slow function calls again every single time you render the component
  // Very big performance problem when you have these slow functions that don't change often

  // Why not just useMemo everywhere, and memoize everything
  // It does give you some performance and memory overhead
  // useMemo must be called every single render of your component, calling additional function
  // Saving the previous value in memory, so you have to store additional variable in memory
  // Not a huge deal, but if you start to use everywhere in your application where you don't need it, gonna cost additional memory usage

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <div>useMemo Example</div>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

export default Memo;

// Slow function
// Referential Equality
