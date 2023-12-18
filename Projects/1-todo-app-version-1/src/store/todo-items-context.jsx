/* eslint-disable react/prop-types */
import { createContext, useReducer, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoItemContext = createContext({
  todo: "",
  date: "",
  todoData: [],
  handleAdd: () => {},
  handleDelete: () => {},
});

const todoItemReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if (action.type === "NEW_ITEM") {
      newTodoItems = [
        ...currTodoItems,
        {
          id: action.payload.id,
          title: action.payload.title,
          date: action.payload.date,
        },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newTodoItems = currTodoItems.filter((todo) => todo.id !== action.payload.id);
    }
    return newTodoItems;
  };
const TodoItemContextProvider = ({children}) => {
    const [todoData, dispathNewTodo] = useReducer(todoItemReducer, []);

    const todo = useRef("");
    const date = useRef("");
    console.log("todo :", todo);
    console.log("date :", date);
  
    const handleAdd = (e) => {
      e.preventDefault();
  
      const newTodoAction = {
        type: "NEW_ITEM",
        payload: {
          id: uuidv4(),
          title: todo.current.value,
          date: date.current.value,
        },
      };
      dispathNewTodo(newTodoAction);
    };
  
    const handleDelete = (id) => {
      
      const deleteTodoAction = {
        type: "DELETE_ITEM",
        payload: {
          id: id,
        },
      };
      dispathNewTodo(deleteTodoAction);
    };

    return   <TodoItemContext.Provider
    value={{
      todo,
      date,
      todoData,
      handleAdd,
      handleDelete,
    }}
  >
     {children}
</TodoItemContext.Provider>
};

export default TodoItemContextProvider;