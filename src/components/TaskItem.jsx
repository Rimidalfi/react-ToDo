import TaskEdit from "./TaskEdit";
import { useState } from "react";

export default function TaskItem({task,taskSaver}){

  const [_task,set_Task] = useState(task);

  function changeTaskName(string)
  {
    console.log("Fired Test" + string)
    set_Task({..._task,name : string})
  }

  function SaveTaskToLocalStorage()
  {
    taskSaver("test");
  }

return (
  <div className="addItem">
  <li className="queue" id="" key= {task.id}>
    <input className="checkbox" id="" type="checkbox" />
    <p className="task" id="">
      {_task.name}
    </p>
    <div className="buttonContainer" id="">
      <TaskEdit taskDesc={task.name} setTaskDesc={changeTaskName}></TaskEdit>
      {/* <button  className="editButton" id="" type="">
        EDIT
      </button> */}
      <button className="deleteButton" id="" type="">
        DELETE
      </button>
      {/* <button className="editButton" type="button" onClick={()=> taskSaver(_task)}>SAVE</button> */}
    </div>
  </li>
  </div>
);



}