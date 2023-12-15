import Heading from "./components/Heading";
import TodoInput from "./components/TodoInput";

import "./App.css";
import TodoItemContainer from "./components/TodoItemContainer";

function App() {
  let tododata = [{id: 1, title: "Buy Milk", date: "4/10/2023"}, {id: 2, title: "Go to college", date: "4/10/2023"}]
  return (
    <center>
      <Heading />
      <div className="container text-center">
        <TodoInput />
        <TodoItemContainer tododata={tododata}/>
      </div>
    </center>
  );
}

export default App;
