//Done steps 1.6 - 1.11


import React, {useState } from 'react';
import ReactDOM from 'react-dom';


const Button = ({ text, setClick, mood }) => {

  return (
    <>
    <button onClick={() => setClick(mood + 1)}>
      {text}
    </button>
    </>
  )
}

const StatisticsLine = ({ text, value }) => {
  if (text === 'Positive') {
    return(
      <td>{text}: {value} %</td>
    )
  }
    return(
  <td>{text}: {value}</td>
)
}

const Statistics = ({ good, neutral, bad }) => {

  if (good > 0 | neutral > 0 | bad > 0) {

  const sum = good + neutral + bad
  const avg = ((good - bad) / sum).toFixed(2)
  const pos = (good / sum * 100).toFixed(2)

  return (
    <table>
      <tbody>
        <tr>
          <StatisticsLine text='Good' value={good} />
        </tr>
        <tr>
          <StatisticsLine text='Neutral' value={neutral} />
        </tr>
        <tr>
          <StatisticsLine text='Bad' value={bad} />
        </tr>
        <tr>
          <StatisticsLine text='Average' value={avg} />
        </tr>
        <tr>
          <StatisticsLine text='Positive' value={pos} />
        </tr>
      </tbody>
    </table>
  )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button setClick={setGood} text='good' mood={good} />
        <Button setClick={setNeutral} text='neutral' mood={neutral} />
        <Button setClick={setBad} text='bad' mood={bad} />
      </div>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);


