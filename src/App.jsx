import { useState } from 'react'
import Input from "./components/Input";
import "./App.css"
import ToDoList from './components/ToDoList';
import loadTaskListFromLS from './utils/loadTaskListFromLS.jsx'
function App() {

  const [task, setTask] = useState({});
  const [reloadSwitch, setReloadSwitch] = useState("");
  //    setReloadSwitch((prev) => !prev); verursacht neues Rendern von App und allem darunter



  let taskList = [];

  
  //localStorage.setItem('Task', JSON.stringify(task));
  loadTaskListFromLS();
  const removeLocal = () => {
  localStorage.removeItem(_task.id);
}

  taskList = loadTaskListFromLS();
  
  return (
    <>
       <Input setTask={setTask} />
       <div className='buttonContainer'>
       <button className="deleteButton" onClick={removeLocal}>Remove Local Storage</button></div>
       <ToDoList taskList={taskList} setReloadSwitch={setReloadSwitch}/>
      {/* <button className="clearAll" id="" type="">
      CLEAR LIST
      </button>  */} 
    </>
  )
}


export default App

