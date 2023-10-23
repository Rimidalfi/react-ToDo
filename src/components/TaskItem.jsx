import TaskEdit from "./TaskEdit";
import { useState } from "react";

function Checkbox({ checkBoxState, onClick }) {
  // return <input className="checkbox" id="" type="radio" onClick={onClick} />;
  return (
    <input className="checkbox" id="" type="radio" onClick={onClick} />
    // <>
    //   {checkBoxState ? (
    //   ) : (
    //     <input className="nonecheckbox" id="" type="radio" onClick={onClick} />
    //   )}
    // </>
  );
}

function Task({ taskState, text }) {
  return (
    <>
      {taskState ? (
        <p className="finishedtask" id="">
          {text}
        </p>
      ) : (
        <p className="task" id="">
          {text}
        </p>
      )}
    </>
  );
}

export default function TaskItem({
  task,
  taskSaver,
  setReloadSwitch,
}) {


  const [_task, set_Task] = useState(task);
  const [taskState, setTaskState] = useState(task.done);
  const [checkbox, setCheckBox] = useState(true);

  function changeTaskName(string) {
    console.log("CHangeTask Name:" + string);
    const changedTask = { ..._task, name: string };
    taskSaver(changedTask);
    set_Task(changedTask);
  }

  function removeMe() {
    console.log("RemoveMe:" + _task);
    localStorage.removeItem(_task.id);
    setReloadSwitch((prev) => !prev);
  }

  function changeTaskState(e) {
    setTaskState(!taskState);
    //setCheckBox(false);
    console.log("Checkbox GONE!");

    //console.log(taskState);
    //console.log(e);
    const changedTask = { ..._task, done:!taskState };
    taskSaver(changedTask);
    //set_Task(changedTask);
  }


  return (
    <div className="addItem">
      <li className="queue" id="" key={task.id}>
        <input className="checkbox" id="" type="radio" onClick={()=> {changeTaskState()}} checked={taskState} />
        <Task taskState={taskState} text={_task.name} />
        {/* <input className="checkbox" id="" type="radio" /> */}
        {/* <p className="task" id="">
          {_task.name}
        </p> */}
        <TaskEdit
          taskDesc={task.name}
          changeTaskName={changeTaskName}
        ></TaskEdit>
        <button className="deleteButton" id="" type="" onClick={removeMe}>
          DELETE
        </button>
        {/* <button className="editButton" type="button" onClick={()=> taskSaver(_task)}>SAVE</button> */}
      </li>
    </div>
  );
}
