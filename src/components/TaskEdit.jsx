import { useState } from "react";


export default function TaskEdit({taskSaver,taskDesc, setTaskDesc})
{
    const [descr, setDescr] = useState(taskDesc);
 

    //Handler for input
    function changeDescr(e)
    {
        e.preventDefault();
        setTaskDesc(descr);
        setShowInput(false);
        setShowSaveButton(false)
        taskSaver("_task")
        localStorage.setItem("_task", JSON.stringify(descr));
    }
    
    function handleInput(e)
    {
        setDescr(e.target.value)
        //setTaskDesc(e.target.value);
    }

    const [showInput, setShowInput] = useState(false);
    const [showSaveButton, setShowSaveButton] = useState(false);
    const handleEditClick = () => {
      setShowInput(true);
      setShowSaveButton(true);
    };
  
    return(
        <>
            <form className="addItem" onSubmit={changeDescr}>

                {showInput && <input type="text" onChange={handleInput} value={descr} />}
                {showSaveButton && <button onClick={changeDescr} className="editButton" type="submit">Save</button>}
                <button className="editButton" type="button" onClick={handleEditClick}>Edit</button>
            </form>
        </>
    );
}