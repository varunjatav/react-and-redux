import TodoItems from "./TodoItems";
import styles from "./TodoItemContainer.module.css";
const TodoItemContainer = (props) => {
    const { tododata } = props;
  return (
    <div className={styles.itemContainer}>
       {tododata.map((todo) => (
        <TodoItems key={todo.id} title={todo.title} date={todo.date} />
       ))}
        </div>
  )
}

export default TodoItemContainer