import TaskItem from "./TaskItem";
import storeTaskInLS from '../utils/storeTaskInLS'

//<TaskItem task={task} taskSaver={storeTaskInLS}></TaskItem>

function ToDoList({ taskList, setReloadSwitch }){

  console.table(taskList);


return (
  <div className="toDo">
    <h2>Your to Do List</h2>
    {taskList.map((task) => {return (

      
      <TaskItem key= {task.id} task={task} taskSaver={storeTaskInLS} setReloadSwitch={setReloadSwitch}></TaskItem>
      )

    })}
  </div>
);
}

export default ToDoList;
