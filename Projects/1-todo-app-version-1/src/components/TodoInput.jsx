/* eslint-disable react/prop-types */
import { useContext } from "react";
import { RiAddBoxLine } from "react-icons/ri";
import { TodoItemContext } from "../store/todo-items-context";

const TodoInput = () => {
const {todo,date,handleAdd} = useContext(TodoItemContext);
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
