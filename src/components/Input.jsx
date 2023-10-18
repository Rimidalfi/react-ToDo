import { useState } from "react";


function Input({ setTask }) {
  

  const initialState = {
    name: "",
  };

  const [inputState, setInputState] = useState(initialState);

  function addTask(name) {
    
    return (prev) => [...prev, {name: inputState.name, id: crypto.randomUUID() }];
  }

  function addToList(e) {
    e.preventDefault();
    setTask(addTask(inputState.name));
  }
  

  function handleInput(e) {
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  }

 return (   
  <>
  <div className="toDo">
        <h1>Create your own to Do List</h1>
        <form onSubmit={addToList}>
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
  </>
  );
  };


export default Input