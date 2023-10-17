import './App.css'

export default function App() {
  return (
    <>
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
      <section className="queue" id="">
        <input className="checkbox" id="" type="radio" />
        <p className="task" id="">
          Aufgabe 1
        </p>
        <div className="buttonContainer" id="">
          <button className="editButton" id="" type="">
            EDIT
          </button>
          <button className="deleteButton" id="" type="">
            DELETE
          </button>
        </div>
      </section>
    </div>
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