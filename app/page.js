import Header from "./components/header.jsx"
import About from "./components/img.jsx"
import Skills from "./components/skills.jsx"
import Projetos from "./components/projetos.jsx"
import Cont from "./components/contato.jsx"

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Skills/>
      <Projetos />
      <Cont />
    </div>
  );
}
