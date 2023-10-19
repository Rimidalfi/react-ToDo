import { useState } from "react";

export default function TaskEdit({taskDesc, setTaskDesc})
{
    const [descr, setDescr] = useState(taskDesc);


    //Handler for input
    function changeDescr(e)
    {
        e.preventDefault();
        setTaskDesc(descr);

    }
    
    function cancelEditTask(e)
    {
        setTask("New");
    }


    function handleInput(e)
    {
        setDescr(e.target.value)
        //setTaskDesc(e.target.value);
    }




    return(
        <>
            <form onSubmit={changeDescr}>
                <input  onChange={handleInput}
                type="text"
                name="task"
                value={descr}
                >
                
                
                </input>
                <button className="editButton" type="submit">Change</button>
                <button className="editButton" type="button">Cancel</button>


            </form>

        
        </>




    );

}