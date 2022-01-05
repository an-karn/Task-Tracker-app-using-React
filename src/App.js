import { useState } from 'react'
import Header from './components/header'
import Tasks from './components/tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text:'Meeting best friend',
        day: 'Feb 8th at 1:30 pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Throw Trash',
        day: 'Everyday ',
        reminder: false

    },

] 
)
//Add Task
const addTask = (task) =>{
  const id = Math.floor(Math.random()* 10000)+1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}
//Delete Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}
  const name = 'Brad'
//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder : !task.reminder}: task))
}
 

  return (
    <div className="container">
      <Header title = 'Tasks Tracker' onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
      {showAddTask&&<AddTask onAdd = {addTask} />}
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}  />: 'No task right now'}
    </div>
  );
}

export default App;
