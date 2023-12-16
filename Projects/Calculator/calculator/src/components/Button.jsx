
import styles from "./Button.module.css";
const Button = ({button, handleClick}) => {
  return (
    <button className={styles.button} onClick={handleClick}>{button}</button>
  )
}

export default Button