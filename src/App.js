import './App.css';
import {Header} from "./components/Header/Header";
import {Card} from "./components/Card/Card";
// import {Home} from "./components/Home/Home";
// import {About } from "./components/About/About";
// import {Projects } from "./components/Projects/Projects";
// import {Skills} from "./components/Skills/Skills";
// import {Blog} from "./components/Blog/Blog";
// import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Card />
      {/* <Home />
      <About />
      <Projects  />
      <Skills />
      <Blog />
      <Contact />*/}
      <Footer /> 
    </div>
  );
}

export default App;
