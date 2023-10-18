function ToDoList({ task }){
return (
  <div>
    <h2>Your to Do List</h2>
    {task.map((task) => {
      return <p key={task.id}>{task.name}</p>;
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