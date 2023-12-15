import Button from './Button';
import styles from './ButtonContainer.module.css';

const ButtonContainer = () => {
    let buttons = ["C", "1" , "2" , "+" , "3" , "4" , "-" , "5" , "6" ,"*" , "7" , "8", "/", "=", "9" , "0" , "."];
  return (
    <div className={styles.buttonContainer}>
        {buttons.map(button => (
            <Button key={button} button={button} />
        ))}
     
    </div>
  )
}

export default ButtonContainer