import React from 'react'

const FilterCompleted = ({filter, setFilter}) => {
    return (
        <div className='hide-completed'>
            <label >
            <span className={filter ? 'check-box styled-checkbox' : 'check-box'} >&#10004;</span>
                <input onClick={() => setFilter(!filter)} type="checkbox"></input>
                Hide completed
            </label>
        </div>
    )
}

export default FilterCompleted