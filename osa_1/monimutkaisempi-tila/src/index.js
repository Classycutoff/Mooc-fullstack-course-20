import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        The app is used by pressing the buttons. 
      </div>
    )
  } else {
    return (
      <div>
        Button press history: {allClicks.join(' ')}
      </div>
    )
  }
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='Left'/>
        <Button onClick={handleRightClick} text='Right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

