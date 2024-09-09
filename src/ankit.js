import React, { useState, useEffect } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(count);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};

export default CounterComponent;