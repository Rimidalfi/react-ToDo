import { useState } from "react";


export default function TaskEdit({taskDesc, changeTaskName})
{
    const [descr, setDescr] = useState(taskDesc);
 

    //Handler for input
    function onSaveClicked(e)
    {
        e.preventDefault();
        changeTaskName(descr);
        setShowInput(false);
        setShowSaveButton(false)
    }
    
    function handleInput(e)
    {
        setDescr(e.target.value)
        //setTaskDesc(e.target.value);
    }

    const [showInput, setShowInput] = useState(false);
    const [showSaveButton, setShowSaveButton] = useState(false);
    const handleEditClick = () => {
    //Todo Logic um ohne Änderung zurück zu gehen
       if(!showInput)
       {
        setShowInput(true);
        setShowSaveButton(true);
       } 
       else
       {
        setShowInput(false);
        setShowSaveButton(false);
       }
      
    };
  
    return(
        <>
            <form className="addItem" onSubmit={onSaveClicked}>

                {showInput && <input type="text" onChange={handleInput} value={descr} />}
                {showSaveButton && <button onClick={onSaveClicked} className="editButton" type="submit">Save</button>}
                <button className="editButton" type="button" onClick={handleEditClick}>{showInput ? "Cancel" : "Edit"}</button>
            </form>
        </>
    );
}