import { useState } from 'react'
import Input from "./components/Input";
import "./App.css"
import ToDoList from './components/ToDoList';
import loadTaskListFromLS from './utils/loadTaskListFromLS.jsx'
function App() {

  const [task, setTask] = useState({});

  let taskList = [];

  
  //localStorage.setItem('Task', JSON.stringify(task));
  loadTaskListFromLS();
//   const removeLocal = () => {
//   localStorage.clear();
// }

  taskList = loadTaskListFromLS();
  
  return (
    <>
    
      <Input setTask={setTask} />
      
       {/* <button className="deleteButton" onClick={removeLocal}>Remove Local Storage</button>  */}
       <ToDoList taskList={taskList} />
      
      
      {/* <button className="clearAll" id="" type="">
      CLEAR LIST
      </button>  */} 
    
    </>
  )
}


export default App

