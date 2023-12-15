
const TodoItems = (props) => {
  return (
    <div className="row kg-row">
    <div className="col-6">
      {props.title}
    </div>
      <div className="col-4">
       {props.date}
      </div>
      <div className="col-2 button-div">
      <button type="button" className="btn btn-danger kg-button">Delete</button>
      </div>
    </div>
  )
}

export default TodoItems