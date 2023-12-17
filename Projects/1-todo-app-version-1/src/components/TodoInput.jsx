/* eslint-disable react/prop-types */
import { RiAddBoxLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
const TodoInput = ({ setTodoData }) => {
  const todo = useRef("");
  const date = useRef("");
  console.log("todo :", todo);
  console.log("date :", date);

  const handleAdd = (e) => {
    e.preventDefault();

    setTodoData((currValue) => [
      ...currValue,
      {
        id: uuidv4(),
        title: todo.current.value,
        date: date.current.value,
      },
    ]);
    todo.current.value = "";
    date.current.value = "";
  };
  return (
    <form className="row kg-row" onSubmit={(e) => handleAdd(e)}>
      <div className="col-6">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Todo Here"
          ref={todo}
        />
      </div>
      <div className="col-4">
        <input type="date" name="date" id="date" ref={date} />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success kg-button">
          <RiAddBoxLine />
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
