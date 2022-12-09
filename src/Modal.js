import React from 'react'

const Modal = ({ id, setShowModal, tasks, setTasks }) => {

    const deleteTask = () => {
        const newTasks = tasks.filter(e => e.id !== id);
        setTasks(newTasks)
        setShowModal(false);
    }

    return (
        <div className='modal'>
            <div className='modal-window'>
                <p>Do you want to delete?</p>
                <div className='buttons'>
                    <span onClick={deleteTask}>Yes</span>
                    <span onClick={() => setShowModal(false)}>No</span>
                </div>
            </div>
        </div>
    )
}

export default Modal;