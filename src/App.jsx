import './App.css'
import Button from './components/Button'
import TaskItem from './components/TaskItem';

const todos = [{key : crypto.randomUUID(), desc:"Abwaschen" , done:true},{key : crypto.randomUUID(), desc:"Saugen" , done:false}];


let test = "String from App";

function CH1(ch_input)
{
  test= ch_input;
  alert("ClickHandler1 " + test);
}

function CH2(ch_input)
{
  
  alert("ClickHandler2 " + test);
}


export default function App() {
  



  return (
    <>
    <Button classname={"addButton"} caption="test" onClickHandler={CH1}/>
    <Button classname={"deleteButton"} caption="delete" onClickHandler={CH2}/>

    <div className="toDo">
      <h1>To Do</h1>
      <section className="addItem">
        <input
          type="text"
          name=""
          id=""
          className="taskInput"
          placeholder="new task ..."
        />
        <button className="addButton">ADD</button>
      </section>



    </div>
    <TaskItem task={todos[0]}></TaskItem>
    <TaskItem task={todos[1]}></TaskItem>
    <div className="Done" id="">
      <h1 className="toDoh1" id="">
        Done
      </h1>
      <section className="finished" id="">
        <p className="finishedtask" id="">
          Aufgabe 5
        </p>
        <button className="donedeleteButton" id="" type="">
          DELETE
        </button>
      </section>
    </div>
    <button className="clearAll" id="" type="">
      CLEAR LIST
    </button>
  </>
  )
}