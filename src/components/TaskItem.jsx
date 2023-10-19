import TaskEdit from "./TaskEdit";
import { useState } from "react";

export default function TaskItem({task,taskSaver}){

  const [_task,set_Task] = useState(task);

  function test(string)
  {
    console.log("Fired Test" + string)
    set_Task({..._task,desc : string})
  }

  function SaveTaskToLocalStorage()
  {
    taskSaver("test");
  }


return (
  <section className="queue" id="">
    <input className="checkbox" id="" type="radio" />
    <p className="task" id="">
      {_task.desc}
    </p>
    <div className="buttonContainer" id="">
      <TaskEdit taskDesc={task.desc} setTaskDesc={test}></TaskEdit>
      <button className="editButton" id="" type="">
        EDIT
      </button>
      <button className="deleteButton" id="" type="">
        DELETE
      </button>
      <button className="editButton" type="button" onClick={()=> taskSaver(_task)}>SAVE</button>
    </div>
  </section>
);



}