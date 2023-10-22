import TaskItem from "./TaskItem";
import storeTaskInLS from "../utils/storeTaskInLS";
import { useState } from "react";

//<TaskItem task={task} taskSaver={storeTaskInLS}></TaskItem>

function ToDoList({ taskList, setReloadSwitch }) {
  const [taskState, setTaskState] = useState(false);
  const [checkbox, setCheckBox] = useState(true);
  // function handleCheckbox() {
  //   setCheckBox(false);
  //   console.log("Checkbox GONE!");
  // }
  function handleChange(e) {
    setTaskState(!taskState);
    setCheckBox(false);
    console.log("Checkbox GONE!");

    console.log(taskState);
    console.log(e);
  }

  // console.table(taskList);

  return (
    <div className="toDo">
      <h2>Your to Do List</h2>
      {taskList.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            taskSaver={storeTaskInLS}
            setReloadSwitch={setReloadSwitch}
            checkTask={handleChange}
            taskState={taskState}
            // toggleCheckBox={setCheckBox}
            checkBoxState={checkbox}
          ></TaskItem>
        );
      })}
    </div>
  );
}

export default ToDoList;
