import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Header from "./Components/Header/Header";
import SideNavbar from "./Components/Navbar/SideNavbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <SideNavbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
