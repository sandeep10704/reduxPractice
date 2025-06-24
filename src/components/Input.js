import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput } from '../Redux/calculator-actions';

const Input = () => {
  const dispatch = useDispatch();


  const changeHandler = (e) => {
    dispatch(setInput(Number(e.target.value)));
  };

  return (
    <input
      type="number"
      onChange={changeHandler}
      placeholder="Enter number"
    />
  );
};

export default Input;
