import Button from "./Button";
import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ setCalVal, calVal }) => {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const handleClick = (e) => {
    let Value = e.target.innerText;
    if (Value === "C") {
      setCalVal("");
    } else if (Value === "=") {
      let evaluate = eval(calVal);
      setCalVal(evaluate);
    } else {
      let newVal = calVal + Value;
      setCalVal(newVal);
    }
  };
  return (
    <div className={styles.buttonContainer}>
      {buttons.map((button) => (
        <Button
          key={button}
          button={button}
          handleClick={(e) => handleClick(e)}
        />
      ))}
    </div>
  );
};

export default ButtonContainer;
