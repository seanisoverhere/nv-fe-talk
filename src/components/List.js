import React, { useState, useEffect } from 'react';

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Gets called everytime getItems function changes
    // Toggle themes also changes this that can be fixed with useCallback hook
    setItems(getItems());
    console.log('update Items');
  }, [getItems]);
  // ^ getItems function is being re-created every single time we re-render the component when states are being changed

  return items.map((item) => <div key={item}>{item}</div>);
};

export default List;
