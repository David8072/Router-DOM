import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import AllCourses from './AllCourses';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';

function App() {

  return (
    <Router>
      <div className="app-container">
        <nav className="navigation">
          <Link to="/">All</Link>
          <Link to="/fullstack">Full Stack Development</Link>
          <Link to="/datascience">Data Science</Link>
          <Link to="/cybersecurity">Cyber Security</Link>
          <Link to="/career">Career</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<AllCourses />} />
            <Route path="/fullstack" element={<FullStackDevelopment />} />
            <Route path="/datascience" element={<DataScience />} />
            <Route path="/cybersecurity" element={<CyberSecurity />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
