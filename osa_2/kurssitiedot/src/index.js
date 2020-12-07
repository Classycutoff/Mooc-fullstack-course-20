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
    console.log(props)
    console.log(props.parts)
    const list_parts = props.parts.map(part => 
    <li key={part.id}>
      {part.name} {part.exec}
    </li>)
  return (
    <ul>
      {list_parts}
    </ul>
  )
}


const Course = ({ course}) => {
  return (
    <>
  <Header course={course.name} />
  <Content parts={course.parts} />
  </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))