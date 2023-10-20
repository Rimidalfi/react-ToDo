export default function storeTaskInLS(taskToBeStored)
{
  console.table("Task to be Stored : " + taskToBeStored);
  localStorage.setItem(taskToBeStored.id,JSON.stringify({name:taskToBeStored.name, done:taskToBeStored.done}));
}