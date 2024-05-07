import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Tooling from "./components/Tooling";

export default function Home() {
  return (
    <main>
      <Introduce />
      <Tooling />
      <Projects />
    </main>
  );
}
