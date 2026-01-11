
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </HashRouter>
  );
}

export default App;

