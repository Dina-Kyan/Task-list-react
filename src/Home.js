import React from 'react'
import InputBar from './InputBar'
import NoTasks from './NoTasks'
import Task from './Task'
import FilterCompleted from './FilterCompleted'

const Home = ({tasks, setTasks}) => {
    const [filterCompleted, setFilterCompleted] = React.useState(false);

    const filterTasks = () => {
        if (!filterCompleted) return tasks
        else return tasks.filter((e) => !e.complete)
    }

    return (
        <div className='home'>
            {tasks.length ? <FilterCompleted filter={filterCompleted} setFilter={setFilterCompleted} /> : ''}
            {/* <FilterCompleted filter={filterCompleted} setFilter={setFilterCompleted}/> */}
            <h2>Task</h2>
            <InputBar tasks={tasks} setTasks={setTasks} />
            {tasks.length ?
                <div className='tasks'>
                    {filterTasks().map((e, i) => <Task {...e} key={e.id} tasks={tasks} setTasks={setTasks} />)}
                </div> :
            <NoTasks />}
        </div>
    )
}

export default Home