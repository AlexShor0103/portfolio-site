import Home from './Pages/Home';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        Hi!
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    
  );
}

export default App;
