import "./App.css";
import "@fontsource/roboto"; // Defaults to weight 400
import Home from "./Components/Home";
// import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navigation";
import AllContext from "./Components/Context/Allcontext";
// overflow-hidden bg-[#0c192c]
function App() {
  return (
    <AllContext>
      <Navigation />
      <Home />
      {/* <About /> */}
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </AllContext>
  );
}

export default App;
