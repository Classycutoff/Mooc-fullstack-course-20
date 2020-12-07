//step 1.14* done, everything resets when you reload the page.

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const random_number = (max) => {
  var rand_num = Math.floor(Math.random() * max)
  console.log('rand_num: ', rand_num)
  return (
    rand_num
  )
}

const increase_points = (func, list, current) => {
  console.log('func: ', func, 'list: ', list, 'current: ', current)
  const list_copy = [... list]
  list_copy[current] += 1

  func(list_copy)
}


const Button = ({ func, text }) => {
  return (
    <>
    <button onClick={func}>
      {text}
    </button>
    </>
  )
}

const Votes = ({ votes_list, anec_list }) => {

  var result = 0
  var pos = 0
  for (var i= 0; i < votes_list.length; i++) {
    console.log(votes_list[i])
    if (votes_list[i] > result) {
      result = votes_list[i]
      pos = i
    }
  }
  console.log('result: ', result)
  console.log('pos: ', pos)

  if (result === 0) {
    return (
      <>
      No votes yet.
      </>
    )
  } else {
    return (
      <>
      <div>
      {anec_list[pos]}
      </div>
      <div>
      Has {result} votes.
      </div>
      </>
    )
  }
}

const App = ({ anec_list }) => {
  const [selected, setSelected] = useState(0)
  const [allClicks, setAll] = useState(new Array(anec_list.length).fill(0))




  return (
    <div>
      <div>
        <h1>Anectode of the day</h1>
      {anec_list[selected]}
      </div>
      <div>Has {allClicks[selected]} points</div>
      <div>
        <Button func={() => setSelected(random_number(anec_list.length))} text='Random' />
        <Button func={() => increase_points(setAll, allClicks, selected)} text='Vote' />
      </div>
      <h1>Anecdote with most votes</h1>
      <Votes votes_list={allClicks} anec_list={anec_list} />
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anec_list={anecdotes} />,
  document.getElementById('root')
)