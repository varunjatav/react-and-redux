import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Input from "./components/Input";

function App() {
  return (
    <div className={styles.container}>
      <Input />
      <ButtonContainer />
    </div>
  );
}

export default App;
