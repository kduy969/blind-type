import styles from "./App.module.css";
import Typer from "./components/Typer/Typer";

export default function App() {
  return (
    <main className={styles.main}>
      <Typer words={["Hello", "World"]} />
    </main>
  );
}
