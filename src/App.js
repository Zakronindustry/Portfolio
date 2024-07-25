import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Hero />
    <Skills />
    <Projects />
    <ContactUs />
    </div>
  );
}

export default App;
