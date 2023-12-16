import Heading from "./components/Heading";
import TodoInput from "./components/TodoInput";
import TodoItemContainer from "./components/TodoItemContainer";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import { useState } from "react";
import MessageTodo from "./components/MessageTodo";


function App() {
  const [todoData, setTodoData] = useState([])
  const [todo, setTodo] = useState("");
  const [date,setDate] = useState("");
  console.log("todo :", todo);
  console.log("date :", date);
  const handleAdd = () => {
    const newTodoData = {
      id: uuidv4(),
      title: todo,
      date: date
    };
    setTodoData([...todoData, newTodoData])
  }
  const handleDelete = (id) => {
   const filteredData = todoData.filter(todo => todo.id !== id);
   console.log(filteredData);
   setTodoData(filteredData);
  }
  return (
    <center>
      <Heading />
      <div className="container text-center">
        <TodoInput todo={todo} setTodo={setTodo} date={date} setDate={setDate} handleAdd={handleAdd}/>
        {todoData.length === 0 && <MessageTodo/>}
        <TodoItemContainer todoData={todoData} handleDelete={handleDelete} />
      </div>
    </center>
  );
}

export default App;
