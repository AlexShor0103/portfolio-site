import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import './App.css';

import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        Hi!
      </div>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/portfolio-site" replace />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />

      </Routes>
    </Router>
    
  );
}

export default App;
