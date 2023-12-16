/* eslint-disable react/prop-types */
import TodoItems from "./TodoItems";
import styles from "./TodoItemContainer.module.css";
const TodoItemContainer = ({ todoData ,handleDelete }) => {
  return (
    <div className={styles.itemContainer}>
       {todoData.map((todo) => (
        <TodoItems key={todo.id} id={todo.id} title={todo.title} date={todo.date} handleDelete={handleDelete} />
       ))}
        </div>
  )
}

export default TodoItemContainer; 