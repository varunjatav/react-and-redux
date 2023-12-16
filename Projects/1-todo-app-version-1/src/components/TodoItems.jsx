/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
const TodoItems = ({id, title, date,handleDelete}) => {
  return (
    <div className="row kg-row">
    <div className="col-6">
      {title}
    </div>
      <div className="col-4">
       {date}
      </div>
      <div className="col-2 button-div">
      <button type="button" className="btn btn-danger kg-button" onClick={() => handleDelete(id)}><MdDelete/></button>
      </div>
    </div>
  )
}

export default TodoItems