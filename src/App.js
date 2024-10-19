import "./App.css";
import '@fontsource/roboto'; // Defaults to weight 400
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navigation";
// overflow-hidden bg-[#0c192c]
function App() {
  return (
    <div className="App" >
    
      <Navigation />
      <Home />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
