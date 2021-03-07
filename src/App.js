import './App.css';
import React, {useState} from "react"
import ToDoInput from './input/TodoInput';
import TodoOutput from './output/TodoOutput';

function App() {
  const [toDoItem, setToDoItem] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const currentItem = (event) => {
    setToDoItem(event.target.value)
  }

  const addToList = (event) => {
    event.preventDefault();
    console.log("Added to list");
    setToDoList([...toDoList, toDoItem])
    setToDoItem("")
  }

  const removeFromList = (listIndex) => {
        console.log("removed from list");
        const list = [...toDoList];
        list.splice(listIndex, 1);
        setToDoList(list);

  }
  return (
    <div className="App">
      <p>Hello React World</p>
      {/* <input type="text" onChange={currentItem}
      value={toDoItem} /> */}
      <ToDoInput 
      addItem={currentItem} 
      toDo={toDoItem}
      click={addToList} /> 
      {
        toDoList.map((item, index) => {
          return <TodoOutput toDo={item} key={index} delete={() => removeFromList(index)} />
        })
      }
      
    </div>
  );
}

export default App;
