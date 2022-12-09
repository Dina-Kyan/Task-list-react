
import './App.css';
import Home from './Home';
import React from "react";

function App() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem('Tasks'));
  if (items) {
    setTasks(items)
  }
  }, []);

  const updateTasks = (newTasks) => {
    setTasks(newTasks)
    localStorage.setItem('Tasks', JSON.stringify(newTasks));
  }

  return (
      <div className="App">
        <Home tasks={tasks} setTasks={updateTasks} />
      </div>
  );
}

export default App;
