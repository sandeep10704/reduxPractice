import React from 'react'
import Input from './Input'
import Buttons from './Buttons'
import Display from './Display'

const Calculator = () => {
  return (
   <div>
      <h1>Redux Calculator</h1>
      <Input />
      <Buttons />
      <Display />
    </div>
  )
}

export default Calculator