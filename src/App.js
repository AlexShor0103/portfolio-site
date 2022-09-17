import Home from './Pages/Home';
import About from './Pages/GDesign';
import Resume from './Pages/Resume';
import Projects from './Pages/UXWork';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import {HashRouter as Router, Routes, Route, Link, Navigate} from "react-router-dom";
import ErrorPage from './Pages/ErrorPage';
function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* This declares all the potential paths pages can go to */}
        <Route path="/" element={<Home />} />
        <Route path="/GDesign" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/UXWork" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/" element={<Navigate to="/portfolio-site" replace />} /> */}

      </Routes>
    </Router>
    
  );
}

export default App;
