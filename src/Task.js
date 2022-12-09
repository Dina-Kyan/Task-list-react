import React from 'react'
import { useState } from "react";
import Modal from './Modal';

const Task = ({ value, complete, id, tasks, setTasks }) => {
    const [showModal, setShowModal] = useState(false);
    const [taskCompleted, setTaskCompleted] = useState(complete);

    const changeTaskStatus = () => {
        setTaskCompleted(!taskCompleted);
        const newTasks = tasks.map(e => e.id === id ? {...e, complete:!taskCompleted}: e);
        setTasks(newTasks)
    }

    return (
        <div className='task'>
            <label style={{color: taskCompleted ? '#acacac' : '#666'}} >
                <span className={taskCompleted ? 'check-box styled-checkbox' : 'check-box'} >&#10004;</span>
                <input onChange={changeTaskStatus} type="checkbox" checked={taskCompleted ? 'checked' : ''} ></input>
                {value}
            </label>
            <button className='delete' onClick={()=> setShowModal(true)} > &times; </button>
            {showModal ? <Modal tasks={tasks} setTasks={setTasks} id={id} setShowModal={setShowModal}/> : ''}
        </div>
    )
}

export default Task