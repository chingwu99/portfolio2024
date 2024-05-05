import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Tooling from "./components/Tooling";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Introduce />
      <Tooling />
      <Projects />
    </main>
  );
}
