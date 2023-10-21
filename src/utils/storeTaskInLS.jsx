export default function storeTaskInLS(taskToBeStored)
{
  console.table("Task to be Stored : " + JSON.stringify(taskToBeStored));
  localStorage.setItem(taskToBeStored.id,JSON.stringify({name:taskToBeStored.name, done:taskToBeStored.done}));
}