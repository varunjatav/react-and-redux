import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  return (
    <div className={styles.container}>
      <Display calVal={calVal}/>
      <ButtonContainer setCalVal={setCalVal} calVal={calVal}  />
    </div>
  );
}

export default App;
