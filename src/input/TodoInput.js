import React from "react"

function ToDoInput(props) {
  return (
    <form className="ToDoInput" onSubmit={props.click}>
      <input type="text" 
       onChange={props.addItem}
       value={props.toDo}
       />
      <button
       >Add</button>
    </form>
  );
}

export default ToDoInput;