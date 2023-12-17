import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-context";

const MessageTodo = () => {
  // console.log(todoData.length);
  const todoData = useContext(TodoItemContext);
  return (
    todoData.length == 0 && <h1>Welcome to My Todo App. Enter Your Todos</h1>
  );
};

export default MessageTodo;
