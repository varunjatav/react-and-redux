/* eslint-disable react/prop-types */

const TodoInput = ({todo,setTodo,date,setDate, handleAdd}) => {
  return (
    <div className="row kg-row">
    <div className="col-6">
      <input type="text" name="title" id="title" placeholder="Enter Todo Here" value={todo} onChange={(e) => setTodo(e.target.value)} />
    </div>
      <div className="col-4">
        <input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success kg-button" onClick={handleAdd}>Add</button>
      </div>
    </div>
  )
}

export default TodoInput