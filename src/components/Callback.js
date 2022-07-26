import React, { useState } from 'react';
import List from './List';

const Callback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // Gives us a sequence of three numbers in a row
  const getItems = () => [number, number + 1, number + 2];
  // Recreated over and over again so when it is passed into the list, it will be a new function
  // Every single time it will be different even though the actual number itself never change

  // useCallback only recreates the function when number changes
  // Won't recreate when the dark variable changes

  // const getItems = useCallback(
  //   () => [number, number + 1, number + 2],
  //   [number]
  // );

  // Very similar to useMemo
  // One big difference is that useMemo takes a function and returns the returned value of the function
  // useCallback takes a function and returns the function

  // const getItems = useMemo(
  //   () => [number, number + 1, number + 2],
  //   [number]
  // );

  // ^ getItems will be set to the array instead of the function
  // So if you have a function with useCallback, it allows you to use it as a function, which means you can pass in a param

  // useCallback only when you worry about referential equality - because the function changes everytime

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#FFF' : '#333',
  };

  // useMemo is to memoize the calculation result between function calls and between renders
  // useCallback is to memoize the callback itself (referential equality) between renders

  // List component that takes in the function getItems and display the items
  return (
    <div style={theme}>
      useCallback Example
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default Callback;
