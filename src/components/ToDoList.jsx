import TaskItem from "./TaskItem";
import storeTaskInLS from '../utils/storeTaskInLS'

//<TaskItem task={task} taskSaver={storeTaskInLS}></TaskItem>

function ToDoList({ taskList, setReloadSwitch }){

  console.table(taskList);


return (
  <div>
    <h2>Your to Do List</h2>
    {taskList.map((task) => {return (
      
      
      <TaskItem key= {task.id} task={task} taskSaver={storeTaskInLS} setReloadSwitch={setReloadSwitch}></TaskItem>
      )

      
      
    })}
  </div>
);
}

export default ToDoList;


// const AddTaskComponent = () => {
//     const [inputValue, setInputValue] = useState("");
  
//     const addTask = () => {
//       localStorage.setItem(inputValue.trim(), "false");
//       setInputValue("");
//     };
  
//     return (
//         <>
//       <div>
//         <input
//           className="toDo"
//           value={inputValue}
//           onChange={e => setInputValue(e.target.value)}
//         />
//         <button
//           className="addButton"
//           onClick={addTask}
//         >
//           Add Task
//         </button>
//       </div>
//       </>
//     );
//   };
  
//   export default AddTaskComponent;