import Heading from "./components/Heading";
import TodoInput from "./components/TodoInput";
import TodoItemContainer from "./components/TodoItemContainer";

import "./App.css";
import { useState } from "react";
import MessageTodo from "./components/MessageTodo";
import { TodoItemContext } from "./store/todo-items-context";


function App() {
  const [todoData, setTodoData] = useState([]);
  const handleDelete = (id) => {
   const filteredData = todoData.filter(todo => todo.id !== id);
   console.log(filteredData);
   setTodoData(filteredData);
  }
  return (
    <TodoItemContext.Provider value={todoData}>
    <center>
      <Heading />
      <div className="container text-center">
        <TodoInput  todoData={todoData} setTodoData={setTodoData}/>
         <MessageTodo />
        <TodoItemContainer todoData={todoData} handleDelete={handleDelete} />
      </div>
    </center>
    </TodoItemContext.Provider>
  );
}

export default App;
