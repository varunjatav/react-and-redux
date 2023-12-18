import Heading from "./components/Heading";
import TodoInput from "./components/TodoInput";
import TodoItemContainer from "./components/TodoItemContainer";
import "./App.css";
import MessageTodo from "./components/MessageTodo";
import TodoItemContextProvider from "./store/todo-items-context";



function App() {


  return (
    <TodoItemContextProvider>
      <center>
        <Heading />
        <div className="container text-center">
          <TodoInput />
          <MessageTodo />
          <TodoItemContainer />
        </div>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
