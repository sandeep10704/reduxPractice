import React from 'react';
import { useDispatch } from 'react-redux';
import { add, subtract, multiply, divide, reset } from '../Redux/calculator-actions';

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(add())}>Add</button>
      <button onClick={() => dispatch(subtract())}>Subtract</button>
      <button onClick={() => dispatch(multiply())}>Multiply</button>
      <button onClick={() => dispatch(divide())}>Divide</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Buttons;
