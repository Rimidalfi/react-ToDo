import { useState } from "react";
import storeTaskInLS from "../utils/storeTaskInLS"


function Input({ setTask }) {

  const initialState = {
    name: "",
  };

  const [inputState, setInputState] = useState(initialState);

  function addTask(name) {
    
    return {name: inputState.name, id: crypto.randomUUID(), done:false };
  }

  function addToList(e) {
    const task = addTask(inputState.name)
    e.preventDefault();
    storeTaskInLS(task)
    setTask(addTask(task));
  }
  

  function handleInput(e) {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  }

 return (   
  
  <div className="toDo">
        <h1>Create your own to Do List</h1>
        <form className="addItem" onSubmit={addToList}>
          <label htmlFor="name">To Do</label>
            <input
              onChange={handleInput}
              type="text"
              name="name"
              id="name"
              value={inputState.name}
              className="taskInput"
              placeholder="type your task ..."
            />
            <button type="submit" className="addButton">Add</button>
        </form>
  </div>
  
  );
  };


export default Input