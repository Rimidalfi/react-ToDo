export default function loadTaskListFromLS()
{

    const outputArray= [];


    for (const [key,value] of Object.entries(localStorage)){
        const newTask = {...JSON.parse(value) , id:key}
        console.table("New object loaded: " + JSON.stringify(newTask));

        outputArray.push(newTask)
    }

    return outputArray;
}