import Home from './Pages/Home';
import './App.css';
import {HashRouter as Router, Routes, Route, Navigate, Link} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        Hi!
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio-site" replace />} />
        <Route path="/portfolio-site" element={<Home />} />
      </Routes>
    </Router>
    
  );
}

export default App;
