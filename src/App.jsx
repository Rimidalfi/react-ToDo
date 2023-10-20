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
  const removeLocal = () => {
  localStorage.removeItem("Task");
}

  taskList = loadTaskListFromLS();
  
  return (
    <>
       <Input setTask={setTask} />
       <button className="deleteButton" onClick={removeLocal}>Remove Local Storage</button> 
       <ToDoList taskList={taskList} />
      
      {/* <section className="queue" id="">
        
        <input className="checkbox" id="" type="radio" />
        <p className="task" id="">
          Aufgabe 1
        </p>
        <div className="buttonContainer" id="">
          <button className="editButton" id="" type="">
            EDIT
          </button>
          <button className="deleteButton" id="" type="">
            DELETE
          </button>
        </div>
      </section> */}
    
    {/* <div className="Done" id="">
      <h1 className="toDoh1" id="">
        Done
      </h1>
      <section className="finished" id="">
        <p className="finishedtask" id="">
          Aufgabe 5
        </p>
        <button className="donedeleteButton" id="" type="">
          DELETE
        </button>
      </section>
    </div>
    <button className="clearAll" id="" type="">
      CLEAR LIST
    </button>  */}
    
    </>
  )
}


export default App

