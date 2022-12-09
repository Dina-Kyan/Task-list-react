import React from 'react'
import { useState, useRef } from "react";


const InputBar = ({tasks, setTasks}) => {
  const [input, setInput] = useState('')
  const taskInput = useRef('');

  const clearInput = () => {
    taskInput.current.value = '';
    setInput('');
  }

  const submitTask = (e) => {
    e.preventDefault()
    if (input.length > 54 ) return;
    else if (input.length < 1) return;
    const newTask = { value: input, complete: false, id: Date.now() };
    const newTasks = [newTask, ...tasks];
    setTasks(newTasks)
    clearInput();
  }


  return (
    <div className='input-bar'>
      <form>
        <input onChange={(e)=> setInput(e.target.value)} ref={taskInput} type="text" placeholder='Write here' style={{ border: input.length < 54 ? '1px solid #ffcd04' : '1px solid #FF3104' }} ></input>
        {input.length > 0 ? <span className='delete' onClick={clearInput}> &times; </span> : ''}
        <input type="submit" value="Add" onClick={(e)=>submitTask(e)}></input>
      </form>
      <span style={{ color: input.length < 54 ? '#fff' : '#FF3104' }} >Task content can contain max 54 characters.</span>
    </div>
  )
}

export default InputBar