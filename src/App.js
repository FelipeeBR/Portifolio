import "./App.css";
import Navbar from '../src/components/Navbar';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
