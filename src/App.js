import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import './App.css';

import {BrowserRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        Hi!
      </div>
      <Routes>
        {/* This declares all the potential paths pages can go to */}
        <Route path="/portfolio-site" element={<Home />} />
        <Route path="/portfolio-site/About" element={<About />} />
        <Route path="/portfolio-site/Resume" element={<Resume />} />
        <Route path="/portfolio-site/Projects" element={<Projects />} />
        

      </Routes>
    </Router>
    
  );
}

export default App;
