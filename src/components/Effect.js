import React, { useState, useEffect } from 'react';

/* 
Querying different endpoint in JSONplaceholder
posts,
todos,
users
^ and get back the data
Changing our code to react according to when we change the resource type
Essentially, we want what it's called the side effect to happen when our resource type changes
Do some form of side effect whenever something happens
*/

const Effect = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  useEffect(() => {
    // It will execute everytime our application renders
    // When state changes, the whole component is rerendered
    // Having it only render once everytime when application load is not very useful
    // Most of the time, you only want to do things when a specific resource on your page change

    // console.log('resource type changed');

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]); // Only rerender when resourceType changes
  // Empty array only run once when application loads, when application mounts

  return (
    <>
      <div>useEffect Example</div>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => (
        <pre>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
};

export default Effect;
