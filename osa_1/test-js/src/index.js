import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ counter }) => <div>{counter}</div>
 

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
    {text}
    </button>
)


const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne}
      text='Plus' 
      />
      <Button handleClick={decreaseByOne}
      text='Minus'
      />
      <Button handleClick={setToZero}
      text='Zero'
      />
    </div>

  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
