import TaskEdit from "./TaskEdit";
import { useState } from "react";


export default function TaskItem({task,TaskSaver, setReloadSwitch}){

  const [_task,set_Task] = useState(task);

  function changeTaskName(string)
  {
    console.log("Fired Test" + string)
    set_Task({..._task,name : string})
  }

  function removeMe()
  {
    console.log("RemoveMe:" + _task)
    localStorage.removeItem(_task.id)
    setReloadSwitch((prev) => !prev);
  }

return (
  <div className="addItem">
  <li className="queue" id="" key= {task.id}>
    <input className="checkbox" id="" type="checkbox" />
    <p className="task" id="">
      {_task.name}
    </p>
    
      <TaskEdit taskDesc={task.name} setTaskDesc={changeTaskName}></TaskEdit>
      <button className="deleteButton" id="" type="" onClick={removeMe}>
        DELETE
      </button>
      {/* <button className="editButton" type="button" onClick={()=> taskSaver(_task)}>SAVE</button> */}
  </li>
  </div>
);



}