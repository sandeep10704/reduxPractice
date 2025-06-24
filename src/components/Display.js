import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const input = useSelector((state) => state.calculator.input);
  const result = useSelector((state) => state.calculator.result);

  return (
    <div>
      <h2>Input: {input}</h2>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default Display;
