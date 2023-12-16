import styles from './Display.module.css'

const Display = ({calVal}) => {
  return (
    <input className={styles.input} type="text" value={calVal} onChange={(e) => console.log(e.target.value)}/>
  )
}

export default Display