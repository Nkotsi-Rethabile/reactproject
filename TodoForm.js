import React from 'react'

const todoform = () => {
  return (
    <form className='todoform'>
      <input type='text' className='task' placeholder='what's the plans></input>
      <button type='submit' className='todo-btn'>add task</button>
    </form>
  )
}

export default todoform
