//This is Courses module

import React from 'react'


const Header = (props) => {
    console.log(props.course)
    return (
      <>
        <h2>
          {props.course}
        </h2>
      </>
    )
  }
  
  const Content = (props) => {
      console.log('Content: ', props)
      console.log('parts: ', props.parts)
      const list_parts = props.parts.map(part => 
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>)
    return (
      <>
        {list_parts}
      </>
    )
  }
  
  const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    console.log('total: ', total)
    return (
      <strong>
        Total of {total} exercises.
      </strong>
    )
  }
  
  
  const Course = ({ courses }) => {
  
    const courses_render = courses.map(course => 
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
      )
  
    return (
      <>
      <h1>Web development Curriculum</h1>
      {courses_render}
    </>
    )
  }
  
export default Course