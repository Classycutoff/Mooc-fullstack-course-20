//Done steps 1.1 - 1.5


import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props.course)
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

const Content = (props) => {
    console.log(props.parts)
    const list_parts = props.parts
  return (
    <>
      <p>
        {list_parts[0].name} {list_parts[0].exer}
      </p>
      <p>
        {list_parts[1].name} {list_parts[1].exer}
      </p>
      <p>
        {list_parts[2].name} {list_parts[2].exer}
      </p>
    </>
  )
}

const Total = (props) => {
  console.log(props.parts)
  const list_parts = props.parts
  return (
    <p>Number of exercises is {list_parts[0].exer + list_parts[1].exer + list_parts[2].exer}</p>
  )
}

const App = () => {
    const course =  {
      name: 'Half Stack application development',
      parts: [
  {
    name:'Fundamentals of React',
    exer: 10
  },
  {
    name: 'Using props to pass data',
    exer: 7
  },
  {
    name: 'State of a component',
    exer: 14
  }
]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))