import TaskEdit from "./TaskEdit";
import { useState } from "react";


export default function TaskItem({task,taskSaver,setReloadSwitch}){

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
  <li className="queue" id="" key= {task.id}>
    <input className="checkbox" id="" type="radio" />
    <p className="finishedtask" id="">
      {_task.name}
    </p>
    <div className="buttonContainer" id="">
      <TaskEdit taskDesc={task.name} setTaskDesc={changeTaskName}></TaskEdit>
      <button className="editButton" id="" type="">
        EDIT
      </button>
      <button className="deleteButton" id="" type="" onClick={removeMe}>
        DELETE
      </button>
      <button className="editButton" type="button" onClick={()=> taskSaver(_task)}>SAVE</button>
    </div>
  </li>
);



}